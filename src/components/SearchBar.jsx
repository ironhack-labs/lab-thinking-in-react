import React from 'react'
import { useState } from 'react'
function SearchBar({ filterProducts }) {
    const [searchWords, setSearchWords] = useState("")

    // handle input field change
    function handleChange(e) {
        const newWord = e.target.value
        setSearchWords(newWord)
        filterProducts(newWord)

    }
    return (
        <div><input onChange={handleChange} placeholder='Sreach your item' /></div>
    )

}

export default SearchBar