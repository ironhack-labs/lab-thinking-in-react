import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <h2>Search</h2>

      <input
        type="text"
        onChange={(event) => props.filterBy(event.target.value)}
        name="search"
      />
      <input type="checkbox" id="products" name="products" />
      <label htmlFor="products"> Only show products on Stock</label>
    </div>
  );
};
  export default SearchBar;
  