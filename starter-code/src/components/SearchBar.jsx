import React from 'react';

const SearchBar = ({filter, setFilter, setJustOnStock}) => {
  return (
  <div>
    <h5>Search</h5>
    <input type="text" name="searchbar" value={filter} onChange={(e) => setFilter(e.target.value)}/>
    <input type="checkbox" name="stock-checkbox" onChange={(e) => setJustOnStock()}/>
    <label>Only show products on stock</label>
  </div>
  );
}

export default SearchBar;