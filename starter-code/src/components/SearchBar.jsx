import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div>Search</div>
      <div><input className="text-input" type="text"/></div>
      <div><input type="checkbox" name="inStock"/><label htmlFor="inStock">Only show products in stock</label></div>
    </div>
  )
}

export default SearchBar;
