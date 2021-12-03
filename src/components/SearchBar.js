import React from 'react';
import { useState } from 'react';

let SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState('');

  let handleSearch = (event) => {
    setSearchInput(event.target.value);

    // console.log(event.target.value);
    props.searchProducts(event.target.value);
  };

  return (
    <div className="search">
      <label htmlFor="search">Search the site:</label>
      <input
        type="search"
        name="searchItem"
        value={searchInput}
        onChange={handleSearch}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
