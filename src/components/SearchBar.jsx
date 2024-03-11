import React from 'react'
import { useState } from 'react'
import './Components.css'

function SearchBar({ filterProducts, inStock, product }) {
    const [searchWords, setSearchWords] = useState("")
    const [inStockOnly, setInStockOnly] = useState(false);

    // handle input field change
    function handleChange(e) {
        const newWord = e.target.value
        console.log(newWord)

        setSearchWords(newWord)
        filterProducts(newWord)

        /* if (e.target.value) {
            setSearchWords()
            filterProducts()
        } */


    }
    function handlecheckbox(e) {
        const isChecked = e.target.checked
        if (isChecked)
            setInStockOnly(isChecked);
        inStock(isChecked);
    }
    return (
        <div className='search'>
            <h3>Filter items</h3>
            <input onChange={handleChange} placeholder='Sreach your item' />
            <input type="checkbox" onChange={handlecheckbox} /><span>show product in Stock only </span>
        </div>
    )

}

export default SearchBar