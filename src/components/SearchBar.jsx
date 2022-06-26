import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ filterList }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (query) => {
    setSearchQuery(query)
    filterList(query);
  };

  return (
    <>
      <div className="search-bar">
        <label htmlFor="search-bar">Search</label>
        <input
          type="search"
          name="search-bar"
          id=""
          value={searchQuery}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <div>
          <input type="checkbox" name="checkbox" id="" />
          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
