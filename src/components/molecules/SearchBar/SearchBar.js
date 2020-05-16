import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <p>Search</p>
            <input type="text" />
            <input type="checkbox" id="onStock" />
            <label htmlFor="onStock">Only show products on stock</label>
        </div>
    );
}

export default SearchBar;