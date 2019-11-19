import React from 'react';

const SearchBox = ({ handleSearch }) => (
  <input
    onChange={handleSearch}
    type="text"
    placeholder="Search for your item!"
  />
);

export default SearchBox;
