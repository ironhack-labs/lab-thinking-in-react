import React from 'react';
import { useState } from 'react';

const SearchBar = ({ search, setSearch }) => {

  return (
    <div>
      <label>Search</label>
      <input
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <label>
      <input type="checkbox" checked={checked} onChange={handleChange}  />
        Only prodycts in stock</label> */}
    </div>
  );
};

export default SearchBar;
