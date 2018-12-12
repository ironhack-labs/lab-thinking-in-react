import React from 'react'

const SearchBar = ({ searchProducts, toggleStock }) => (
    <div>
        <input type="text" style={{ padding: 8, margin: 8, width: '25%' }} placeholder="Search.." onChange={searchProducts} /><br />
        <label>
            <input type="checkbox" name="inStock" onChange={toggleStock} />
            Show only products in stock
        </label>
    </div>
)

export default SearchBar