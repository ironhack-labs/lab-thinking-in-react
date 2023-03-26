import React from 'react';

function SearchBar({ search, onSearch }) {
 
    const handleChange = (ev) => {
      onSearch(ev.target.value)

    }
  return (
    <input
      className="form form-control"
      type="text"
      placeholder="Search"
      value={search}
      onChange={handleChange}
    />
  )      
  
}

export default SearchBar;
