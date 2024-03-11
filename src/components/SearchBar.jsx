import React from 'react'
import { useState } from 'react'
import './Components.css'

function SearchBar({ filterProducts, product }) {
    const [searchWords, setSearchWords] = useState("")

    // handle input field change
    function handleChange(e) {
        const newWord = e.target.value
        console.log(newWord)

        setSearchWords(newWord)
        filterProducts(newWord)

        /*  if (newWord === '') {
             setSearchWords('')
             filterProducts('')
         }  */


    }
    return (
        <div><input onChange={handleChange} placeholder='Sreach your item' /></div>
    )

}

export default SearchBar