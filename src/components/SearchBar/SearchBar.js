import React from 'react';

function SearchBar(props) {

    const handleChange = (e) => {
        const userSearch = e.target.value
        props.onChange(userSearch)
    }
    
    const isChecked = (e) => {
        if (e.target.checked) {
            props.filterStockProds()
        } 
    }

    return (
        <div>
            <h3>SearchBar</h3>
            <div>
                <label htmlFor="search">Search</label>
                <input type="text" name="search" onChange={handleChange} />
            </div>
            <div>
                <input type="checkbox" name="stock" onChange={isChecked} />
                <label htmlFor="stock">OnlyShow products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar;