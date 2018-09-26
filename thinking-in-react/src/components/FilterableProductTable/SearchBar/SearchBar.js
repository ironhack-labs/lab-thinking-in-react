import React from 'react';
import './SearchBar.css';


const SearchBar = (props) => (
            <div className="search-wrapper">
                <div className="form-group">
                    <label htmlFor="product_name">Product name:</label>
                    <input type="text" className="form-control" id="product_name" name="searchString" onChange={ props.handleChange } value={ props.searchString } placeholder="Search..." />
                </div>
                <div className="checkbox">
                    <label><input className="checkbox" checked={ props.showStockOnly } name="showStockOnly" onChange={ props.handleChange } type="checkbox"/>Only show products in stock.</label>
                </div>
            </div>
        );

export default SearchBar;