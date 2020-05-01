import React from 'react';

const SearchBar = ({ handleSearch, handleCheckbox }) => {
  return (
    <form>
      <label htmlFor="search">Search</label>
      <input onChange={handleSearch} type="text" />
      <br />
      <label htmlFor="search">Only show products on stock</label>
      <input onChange={handleCheckbox} type="checkbox" />
    </form>
  );
};

export default SearchBar;
