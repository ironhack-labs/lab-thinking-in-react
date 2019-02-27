import React from 'react'

let SearchBar = ({ onChangeSearch, onChangeStock }) => (
    <div>
    <h3>Search:</h3>
    
    <input onChange={onChangeSearch} type="text" name="search" />
    <input onChange={onChangeStock} type="checkbox" /> Only products in stock
    </div>
)

export default SearchBar