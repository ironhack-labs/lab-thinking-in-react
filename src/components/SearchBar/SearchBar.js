import React from 'react'
import "./SearchBar.css"

function SearchBar(props) {
    
    return (
        <div>
            <h3>Search</h3>
            <input className="searchBar"  placeholder="Search for items..." value={props.searchParam}
             onChange={props.handleSearchParam}></input> <br/>
            <label>Only show products on stock</label>
            <input type="checkbox" class="hidden" />
            
        </div>
    )
}

export default SearchBar
