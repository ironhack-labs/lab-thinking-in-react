import React from 'react'

function SearchBar({ searchCb, checkCb }) {
  return (
    <div>
      <h1>Search Bar</h1>
      <input className="style-input" type="text" onChange={searchCb} placeholder="Search..." />
      <br />
      <input type="checkbox" onChange={checkCb} /> Only show products on stock
    </div>
  )
}
export default SearchBar;