import React from 'react';

const SearchBar = (props) => {
    console.log('props from SearchBar: ', props)

    return (
        <div className="search">
            <div>
                <input type="text" name="query" placeholder="Search..." onChange={props.setQuery} />
            </div>
            <div>
                <label htmlFor="stock">Only show products in stock</label><input type="checkbox" name="stock" onChange={props.setQuery} />
            </div>
        </div>
    );
}

export default SearchBar;