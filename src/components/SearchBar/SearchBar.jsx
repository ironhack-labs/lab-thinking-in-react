import './SearchBar.css'
import { useState } from 'react'
import productsData from '../../data.json'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState({})

    const [products, setProducts] = useState([])

    const handleChange = e => {
        e.preventDefault()
        setSearchInput(e.target.value)

    }
    if (searchInput.length > 0) {
        products.filter((product) => {
            return product.name.match(searchInput)
        })
    }

    return (
        <div className="SearchBar">
            <form>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s"
                    onChange={handleChange}
                    value={searchInput}
                />
            </form>
            <label>Only show products in stock</label>
            <input type="checkbox" />
        </div>
    )
}

export default SearchBar