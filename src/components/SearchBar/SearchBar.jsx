import { useState } from 'react'

function SearchBar({ searchedKeyword }) {

    const [searchProduct, setSearchProduct] = useState([])
    const handleChange = event => {
        setSearchProduct(event.target.value)
        searchedKeyword(event.target.value)
    }

    return (
        <>
            <h1>Search Bar</h1>
            <input
                type="text"
                placeholder="Search product"
                value={searchProduct}
                onChange={handleChange}
            />
            <label>
                <input
                    type="checkbox"

                    value={searchProduct}
                    onChange={handleChange}
                />
                Only show products in stock
            </label>
        </>
    )
}


export default SearchBar