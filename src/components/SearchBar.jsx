import React, { useState } from 'react';

const SearchBar = ({ onSearch, showInStockOnly, onToggleInStock}) => {
    const [ search, setSearch ] = useState('')
    const [ letShowInStockOnly, setLetShowInStockOnly] = useState(showInStockOnly)
    const handleSearchChange = (e) => {
        const value = e.target.value
        eatSearch(value)
        onSearch(value)
    }
    const handleCheckboxChange =(e) => {
        const checked = e.target.checked
        setLetShowInStockOnly(checked)
        onToggleInStock(checked)
    }

    return(
        <div>
            <input
            type= "text"
            placeholder = "Search"
            value = "{search}"
            onChange = {handleSearchChange}
            />
        
        <label>
        <input
            type= "checkbox"
            checked = {letShowInStockOnly}
            onChange = {handleCheckboxChange}
            />
            Only show products in stock
        </label>
        </div>
    )
}

export default SearchBar