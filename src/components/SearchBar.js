import React from 'react'

export default function SearchBar( {searchInput, setSearchInput} ) {
  
  const handleSearchBar = (event) => {
    const newSearch = event.target.value;
    setSearchInput(newSearch);
  };


  return (
    <div className='searchBar'>

<label for = "search-site"> Search This Site:
<input type="search" id="search-site" name="search" onChange={handleSearchBar}/> 
<input type='checkbox' /> 
Only Show Products that are IN STOCK.

</label>

    </div>
  )
}
