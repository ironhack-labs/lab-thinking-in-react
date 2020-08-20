import React from 'react';

function SearchBar(props) {
  return (
    <div className="searchBar">
      <h3>Search</h3>
      <input type="text" placeholder="Search for an item" id="searchBox" onChange={props.onChange}/>
      <div>
        <input type="checkbox" id="inStock" name="inStock" onChange={props.onSelect}/>
        <label htmlFor="inStock">Only show products on stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
