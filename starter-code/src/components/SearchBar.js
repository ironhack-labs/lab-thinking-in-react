import React from 'react'

const SearchBar = ({ searchChange, searchCheckbox }) => (
  <div>
    <div>
      <input type="text" placeholder="Search..." onChange={searchChange} />
    </div>
    <div>
      <input type="checkbox" onClick={searchCheckbox} />
      <label htmlFor="">Only show products in stock</label>
    </div>
  </div>
)

export default SearchBar;