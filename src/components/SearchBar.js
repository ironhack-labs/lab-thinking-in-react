import { useState, React } from 'react';

function SearchBar (props) {
  
  const handleInputChange = event => {
		props.setSearchProp(event.target.value)
	}
  
  return(
      <div>
        <input onChange={handleInputChange} type="search" id="site-search" name="q" placeholder="search..."></input>
      </div>    
  )
}

export default SearchBar;