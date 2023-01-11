import { useState } from 'react'
import products from '../data.json'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('')

    const searchProducts = e => {
        e.preventDefault()
        setSearchInput(e.target.value)

    }
    if (searchInput.length > 0) {
        products.filter((product) => {
            return  product.name.toLowerCase() === setSearchInput
        })
    }

    return (
        <div className="SearchBar">
            <form>
                    <span>Search</span>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => searchProducts(e)}
                    value={searchInput}
                />
            </form>
            <label>Only show products in stock</label>
            <input type="checkbox" />
        </div>
    )
}

export default SearchBar