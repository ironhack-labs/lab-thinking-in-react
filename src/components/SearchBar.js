import React from 'react';
import './SearchBar.css';

const Searchbar = () => {
  return (
    <div id="search">
      <p>Search</p>
      <input id="searchInput"></input>
      <p>
        <input name="checkbox" type={'checkbox'}></input>
        <label for="checkbox">Only show products in stock</label>
      </p>
    </div>
  );
};

export default Searchbar;
