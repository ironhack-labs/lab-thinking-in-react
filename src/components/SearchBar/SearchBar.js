import React from 'react';

import '../SearchBar/SearchBar.css';

const SearchBar = (props) => {
    
  return (
    <div className='searchbar'>
      <p>Search</p>
      <input 
      type="text" 
      placeholder='search your product here' 
      className='searchbar_input'
      onChange={(e) => props.filterProductsSearch(e.target.value)}
      />
      <div className='checkbox_container'>
        <input 
        type="checkbox" 
        className='searchbar_checkbox' 
        checked={props.inStock}
        onChange={() => props.filterProductsSearch(!props.inStock)}
        />
        <label htmlFor='inStock'>Only show products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar;