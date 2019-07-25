import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <label>Search: </label>
      <input className="input" type="text" name="search" value={props.search} onChange={(e) => props.inputHandler(e)} />
    </div>
  )
}

export default SearchBar