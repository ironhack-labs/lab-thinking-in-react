import React from "react"

const SearchBar = ({ onChangeSearch, onChangeStock }) => (
  <div>
    <h4>Search</h4>
    <input onChange={onChangeSearch} type="text" name="search" />
    <input onChange={onChangeStock} type="checkbox" /> Only products in stock
  </div>
)

export default SearchBar
