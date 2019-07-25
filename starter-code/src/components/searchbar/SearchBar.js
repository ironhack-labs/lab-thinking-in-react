import React from 'react';
import './searchbar.css'

function SearchBar(props) {

  return (
    <div className="Blue">
      {/* <legend>Search:</legend> */}
      <input className="input" placeholder="Search" onChange={props.searchFunction} />
      <div>
        <input type="checkbox" className="checkbox" onChange={props.toggleSearchFunction} />
        <label className="check"> only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;