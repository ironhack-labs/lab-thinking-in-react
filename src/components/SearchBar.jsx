import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
      <input type="checkbox"></input>
      <label>Only show product in stock</label>
    </div>
  );
};

export default SearchBar;
