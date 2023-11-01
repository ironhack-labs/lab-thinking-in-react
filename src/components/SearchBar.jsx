import React from "react";

function SearchBar({handleSearch, handleInStock})
{
    return(
        <div className="searchbar-container">
            <input placeholder="search products..." onChange={handleSearch}></input>
            <div className="checkBox">
                <input type="checkbox" id="search" onChange={handleInStock}></input>
                <label htmlFor="search">Only show products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar