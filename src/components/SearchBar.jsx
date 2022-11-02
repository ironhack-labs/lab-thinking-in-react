import React from 'react'

function SearchBar({ filterText,
  onFilterTextChange }) {
  return (
    <div className='Searchbar'>
      <h2>Search</h2>
      <form>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <label>
          <input
            type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    </div>
  )
};

export default SearchBar;
