import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={event => props.onChange(event.currentTarget.value)} placeholder="Search products..." className="search-input"></input>
            <div>
                <input type="checkbox" id="on-stock" checked={props.filterInStockActive} onChange={props.checkBoxChange} ></input>
                <label htmlFor="on-stock" >Only show products on stock</label>
            </div>

        </div>
    )
}

export default SearchBar;