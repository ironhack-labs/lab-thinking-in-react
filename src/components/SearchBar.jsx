import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";


function SearchBar({ filterText, handleStringChange, checked, handleCheck }) {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className='search-form' style={{
      backgroundColor: isDarkMode ? "aliceblue" : "#3498db",
      color: isDarkMode ? "#283848" : "white"
    }}>
      <h2>Search 🔎</h2>
      <form className='form'>
        <input className='search-bar'
          type="text"
          value={filterText}
          placeholder="Search product..."
          onChange={handleStringChange} />
        <label>
          <input
            type="checkbox"
            value={checked}
            onChange={handleCheck}
          />
          {' '}
          Only show products in stock
        </label>
      </form>
    </div>
  )
};

export default SearchBar;
