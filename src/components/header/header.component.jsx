import React from 'react';

import SearchBar from './../searchBar/searchBar.component';
import './header.styled.sass';

function Header ({searchValue, handleChange}) {

  return (
    <header className="header">
      <SearchBar
        placeholder='Gif me..'
        searchValue={searchValue}
        handleChange={handleChange}
      />
    </header>
  )
}

export default Header;
