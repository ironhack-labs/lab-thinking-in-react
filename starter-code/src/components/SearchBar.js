import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input name="search" value={props.searchBar} onChange={(event) => props.searchChange(event)} />
      <input type="checkbox" />
    </div>
  )
}

export default SearchBar;