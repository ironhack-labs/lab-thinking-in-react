import ProductsPage from "../ProductsPage/ProductsPage";
import { useState } from 'react';

function SearchBar({ filterProduct }) {
    const [SearchBar, setSearchBar] = useState('')

    const handleChange = e => {
        setSearchBar(e.target.value)
        filterProduct(e.target.value)
    }
    console.log('bañucjuvqñduhv', filterProduct)

    return (
        <>
            <h3>Search</h3>
            <input type="text" onChange={handleChange} />
            <br />
            <input type="checkbox" name='search' />
            <label htmlFor="search">Only show products in stock</label>
        </>
    )
}

export default SearchBar