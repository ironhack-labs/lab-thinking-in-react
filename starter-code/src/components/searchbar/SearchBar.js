import React from 'react';
import './searchbar.css'

function SearchBar(props) {

  return (
    <div className="Blue">
      <legend>Search</legend>
      <input  onChange={props.searchFunction} />
      <div>
        <input type="checkbox" onChange={props.toggleSearchFunction} />
        <label>Only show products on stock</label>
      </div>
    </div>
  );
}

export default SearchBar;