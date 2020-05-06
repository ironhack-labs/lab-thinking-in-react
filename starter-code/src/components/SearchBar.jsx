import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ handleSearch, handleChecked }) {
  return (
    <div className="search">
      <h2>Search</h2>
      <input
        className="search__input"
        type="text"
        onChange={handleSearch}
        placeholder="Search..."
      />
      <div className="checkbox">
        <input
          type="checkbox"
          id="in-stock"
          name="in-stock"
          onChange={handleChecked}
        />
        <label htmlFor="in-stock">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
