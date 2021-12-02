import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        onChange={(event) => props.filterBy(event.target.value)}
      />
      <input type="checkbox" id="products" name="products" />
      <label for="products"> Only show products on Stock</label>
    </div>
  );
};

export default SearchBar;
