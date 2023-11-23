import React from 'react'

function SearchBar(props) {
    const { handleSearchChange, handleStockChange, inStock } = props


    return (
        <div className="search-bar">
            <p> Search </p>
            <input type="text" placeholder="Search" onChange={handleSearchChange}
            />
            <label>
                <input type="checkbox" checked={inStock} onChange={handleStockChange} />
                Stock
            </label>
        </div>
    )
}

export default SearchBar