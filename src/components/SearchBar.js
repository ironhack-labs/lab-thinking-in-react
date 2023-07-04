import React from "react";

export default function SearchBar() {

  return (
    <div className="searchBar-container">
    <h3>Search</h3>
    <input className="search-input" />
    <label>
      <input type="checkbox" />
      Only show products in stock
    </label>
    
    </div>
    
  )
}