import React from 'react';

const SearchBar = ({searchFor, filterStocked}) => {

    const handleSearchInputChange = e => {
        const value = e.target.value
        searchFor(value)
    }

    const handleInputCheckChange = () => {
        filterStocked()
    }

        return (
            <>
                <label htmlFor="searchBox" >Search</label>
                <input type="text" id="searchbox" onChange={e => handleSearchInputChange(e)} />

                <input type="checkbox" id="showStock" onChange={() => handleInputCheckChange()}/>
                <label htmlFor="showStock">Show Only products in stock</label>
            </>
        )
}


export default SearchBar