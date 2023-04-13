import React from 'react'

const SearchBar = ({ handleSearch, searchKeyword, handleCheck }) => {
  return (
    <div className='Search'>
      <label>Search</label>
      <input type='text' value={searchKeyword} onChange={handleSearch} className='search' />
      <div>
        <input type="checkbox" onChange={handleCheck} />
        <label>Only show products in Stock</label>
      </div>
    </div>
  )
}

export default SearchBar