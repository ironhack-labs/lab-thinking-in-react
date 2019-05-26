import React from 'react'

const SearchBar = () => {
  return (
    <div className="active-cyan-4 mb-4">
      <label>Search</label>
        <input className="form-control" type="text" aria-label="Search" />
      <label>Only show products on stock</label>
        <input type="checkbox"/>
    </div>
  )
}

export default SearchBar