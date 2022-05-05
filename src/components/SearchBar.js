import { useState } from "react/cjs/react.production.min";

function SearchBar (props) {

  
    const handleSearchInput = e => {
        props.setSearch(e.target.value)
    }

    const handleCheckedInput = e => {
        props.setChecked(false)
        console.log('tick')
    }

    return (
        <div className="search">
            <label>Search</label>
            <input type="text" onChange={handleSearchInput}></input>
            <input type="checkbox" onChange={handleCheckedInput}></input><label>Only show products in stock</label>
        </div>
    )

}

export default SearchBar