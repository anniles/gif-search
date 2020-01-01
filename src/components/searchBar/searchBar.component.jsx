import React from 'react';
import './searchBar.styles.sass';

function SearchBar({searchValue, placeholder, handleChange}) {
  return <input
    type="text"
    placeholder={placeholder || 'Search for...'}
    value={searchValue}
    onChange={(e) => handleChange(e)}
    />;
}

export default SearchBar;
