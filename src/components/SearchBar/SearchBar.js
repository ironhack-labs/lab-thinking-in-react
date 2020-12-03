import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const { search, handleChange, stock } = props;

  return (
    <div className='search'>
      <h4>Search</h4>
      <input 
        value={search}
        name='search'
        type='text' 
        className='search-input' 
        onChange={handleChange} 
      />
      <div className='search-stock'>
        <input 
          name='stock'
          type='checkbox' 
          className='search-checkbox' 
          checked={stock}
          onChange={handleChange}
        />
        <span>Only show products on stock</span>
      </div>
    </div>
  )
}

export default SearchBar;
