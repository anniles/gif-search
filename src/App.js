import React, { useState, useEffect } from 'react';
import './App.sass';

import Header from './components/header/header.component';
import List from './components/list/list.component';
import Footer from './components/footer/footer.component';

import { searchQuery } from './logic/searchGif';
import useDebounce from './logic/useDebounce';

function App() {
  const [searchValue, setSearchValue] = useState('hi');
  const [list, setList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchValue, 500);

  const handleSearchChange = async (e) => {
    setSearchValue( e.target.value);
  }

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchQuery(debouncedSearchTerm).then(results => {
          setIsSearching(false);

          setList(results);
        });
      } else {
        setList([]);
      }
    },
    [debouncedSearchTerm]
  );

  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        handleChange={handleSearchChange}
      />

      {isSearching
        ? <div className="loading">Loading ...</div>
        : <List list={list} />
      }

      <Footer />
    </div>
  );
}

export default App;
