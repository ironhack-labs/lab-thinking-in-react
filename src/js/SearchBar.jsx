import React, { Component } from 'react';

const SearchBar = props => {

    return (
        <div className="Search">

            <input type="text" placeholder="Search.." onChange={props.handleSearch}/>

            <label htmlFor="inStock">Only show products in stock</label>
            <input id="inStock" type="checkbox" onChange={props.handleStocked}/>

        </div>
    )
}

export default SearchBar