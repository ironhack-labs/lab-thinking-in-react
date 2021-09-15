import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ filterProds}) => {
  const [input, setInput] = useState('');  
  
  const handleChange = event => {
    const { value } = event.target;
    setInput(value);    
    filterProds(value);    
  };
  
  return (
    <div className="searchbar-box">
      <p>Search</p>
      <div className="form-outline">
        <input
          type="text"
          name="input"
          className="form-control"
          placeholder="Type for product search"
          onChange={handleChange}
          value={input}
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=''          
          id="flexCheckDefault"
        />
        <label 
          className="form-check-label" 
          htmlFor="flexCheckDefault">
          Only show products on stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
