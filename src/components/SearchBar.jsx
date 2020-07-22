import React from 'react'

const SearchBar = ({ callback, callback2 }) => {
    return (
        <React.Fragment>
            <input id="searchBar" type="text" onChange={callback} placeholder="Search..." />
            <div className="checkbox">
            <input type="checkbox" onChange={callback2}/> <label htmlFor="checkbox">Only show products in stock</label>
            </div>
        </React.Fragment>
    )
}

export default SearchBar
