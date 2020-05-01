import React from 'react';

const SearchBar = ({ searchHandler, search, checkBoxHandler }) => (
  <div>
    <input
      onChange={searchHandler}
      type="text"
      className="input search-bar"
      name="search"
      placeholder="Search"
      value={search}
    />
    <label>Only show products on stock </label>
    <input
      type="checkbox"
      className="checkbox"
      name="showProducts"
      onChange={checkBoxHandler}
    />
  </div>
);

export default SearchBar;
