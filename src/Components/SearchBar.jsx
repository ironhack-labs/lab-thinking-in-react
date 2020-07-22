import React, { Component } from 'react';

function SearchBar(props) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        onChange={props.callback}
        placeholder="Search..."
      />
      <div className="check-box">
        <input
          type="checkbox"
          name="stocked"
          id="inStock"
          onClick={props.checkbox}
        />
        <label htmlFor="stocked">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
