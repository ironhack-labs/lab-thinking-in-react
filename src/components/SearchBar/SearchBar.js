import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar-box">
      <p>Search</p>
      <div className="form-outline">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Type for product search"
          aria-label="Search"
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Only show products on stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
