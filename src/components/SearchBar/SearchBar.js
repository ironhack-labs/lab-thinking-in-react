import React, { useState } from 'react';

import '../SearchBar/SearchBar.css';

const SearchBar = (props) => {
  // const [searchInput, setSearchInput] = useState('');
  const [inStock, setInStock] = useState(false);

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
        name='inStock'
        id='inStock'
        checked={inStock}
        onChange={(e) => props.filterProductsInStock(!inStock)}
        />
        <label htmlFor='inStock'>Only show products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar;