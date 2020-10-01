import React, { Component } from 'react';
import './SearchBar.css';

function SearchBar (props) {
        return (
            <div className="search-bar">
                <h3>Search</h3>
                    <input name="searchParams" type="text" onChange={props.onChangeHandler} placeholder="Search..."></input>
                <div className="in-stock">   
                    <input type="checkbox" id="isInStock" name="isInStock"></input>
                    <label>Only show products in stock</label>
                </div>
            </div>
        );
};

export default SearchBar;
