import React, { useState } from 'react'

const SearchBar = props => {

    const handleChangeSearch = (e) => {
        e.preventDefault()
        props.search(e.target.value)
    }

    return (
        <div>
            <h3 style={{textAlign:"center"}}>Search</h3>
            <input className="searchBar" type="text" value={props.searchInState} onChange={handleChangeSearch} />
        </div>
    )
}

export default SearchBar
