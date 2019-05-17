import React from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    return (
      <div className="search-container">
        <label>Search</label>
        <input type="text" placeholder="Search..." onChange={(e) => props.handleChange(e)} />
        <div>
          <input type="checkbox" onChange={(e) => props.handleChangeStock(e)} />
          <label> Only show products on stock</label>
        </div>
      </div>
    );
  }

export default SearchBar;