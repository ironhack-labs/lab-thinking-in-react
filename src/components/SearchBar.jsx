import React from 'react';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <>
      <div className='search-bar'>
        <label htmlFor="search-bar">Search</label>
        <input type="search" name="search-bar" id="" />
        <div>
          <input type="checkbox" name="checkbox" id="" />
          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
