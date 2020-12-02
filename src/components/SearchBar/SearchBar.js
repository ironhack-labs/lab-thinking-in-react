import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const { handleChange, showInStock, handleCheck } = props;

  return (
    <div className='search'>
      <h4>Search</h4>
      <input 
        type='text' 
        className='search-input' 
        onChange={handleChange} 
      />
      <div className='search-stock'>
        <input 
          type='checkbox' 
          className='search-checkbox' 
          checked={showInStock}
          onChange={handleCheck}
        />
        <span>Only show products on stock</span>
      </div>
    </div>
  )
}

export default SearchBar;
