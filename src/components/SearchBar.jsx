import React from 'react';

const SearchBar = ({ search, onSearchValue }) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        className="input"
        onChange={(event) => onSearchValue(event.target.value)}
        type="text"
        id="search"
        name="search"
        value={search}
        placeholder="Search"
      />
      <label htmlFor="stock">Only show products in stock</label>
      <input id="stock" type="checkbox" />
    </div>
  );
};

export default SearchBar;
