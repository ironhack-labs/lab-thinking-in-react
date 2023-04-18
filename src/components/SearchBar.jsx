import React from 'react';

const SearchBar = ({ searchQuery, onSearchInputChange }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={onSearchInputChange}
    />
  );
};

export default SearchBar;
