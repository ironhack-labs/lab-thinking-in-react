import React from 'react'
//rsc Shortcut for "dumb Component"

const Search = (props) => {
    return (
        <div className="searchBar">
            <input className="bar" onChange={props.handleSearchQuery} value={props.search} type="text" placeholder="search..."/>
           <div> <input onChange={props.handleCheckBox} type="checkbox" name="inStock" value="inStock" checked={props.checked}/> Only show products in stock</div>
        </div>
    );
};

export default Search;

