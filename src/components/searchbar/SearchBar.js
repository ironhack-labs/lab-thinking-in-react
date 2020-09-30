import React from 'react';
import './SearchBar.css';

//this can be a funtional component
const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <h3>Search</h3>
      <input
        name="searchParams"
        type="text"
        onChange={props.handleOnChange}
        placeholder="Search..."
      ></input>
      <div className="in-stock">
        <input
          type="checkbox"
          id="stock"
          name="stock"
          onChange={props.handleStock}
        ></input>
        <label>Only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
