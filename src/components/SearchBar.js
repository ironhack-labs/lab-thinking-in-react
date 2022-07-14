import { useState, React } from 'react';

function SearchBar (props) {

  const handleInputChange = event => {
		props.setSearchProp(event.target.value)
	}

  const handleStock = event => {
		props.setSearchProp(event.target.value)
	}

  return(
    <div>
      <input onChange={handleInputChange} type="search" id="site-search" name="q" placeholder="search..."/>
      <div>
        <input
                type="checkbox"
                checked={props.setSearchProp}
                onChange={handleStock}
              />
        <label htmlFor="" className="p-2">Only show products in stock</label>    
      </div>  
    </div>    
  )
}

export default SearchBar;