import React from 'react'
//rsc Shortcut for "dumb Component"

const Search = (props) => {
    return (
        <div>
            <input onChange={props.handleSearchQuery} value={props.search} type="text" placeholder="search..."/>
            <input type="checkbox" name="inStock" value="inStock"/> Only show products in stock<br/>
        </div>
    );
};

export default Search;

