import React from "react";

export default function SearchBar( {searchInput, setSearchInput} ) {
// SearchBar recieves {searchInput, setSearchInput} as props

  const handleSearchBar = (event) => {
    // Extract the  value of the input field using event.target.value and store it in the newSearch variable.
    const newSearch = event.target.value;
    // Update the searchInput state using
    setSearchInput(newSearch);
    // This will trigger a re-render of the ProductPage component and update the searchInput value.

  }

  return (
    <div className="searchBar-container">
    <h3>Search</h3>
    <input className="search-input" onChange={handleSearchBar}/>
    {/* When the user types somtheing, OnChange event is triggered and calls the function */}
    <label>
      <input type="checkbox" />
      Only show products in stock
    </label>
    
    </div>
    
  )
}