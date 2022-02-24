import { useState } from 'react'


function SearchBar({ handleSearchBar }) {

    const handleInputSearch = e => {

        handleSearchBar(e.target.value)
    }
    return (
        <>
            < input type="text" onChange={handleInputSearch} />
        </>
    );
}

export default SearchBar