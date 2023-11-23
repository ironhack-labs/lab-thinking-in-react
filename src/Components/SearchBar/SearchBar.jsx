import { useState } from "react"

const SearchBar = ({ filterProducts }) => {
    const [search, setSearch] = useState('')
    const [inStock, setInStock] = useState(false)

    const handleInputChange = (event) => {
        const { value } = event.target
        setSearch(value)
        filterProducts(value, inStock)
    }

    const handleCheckChange = (event) => {
        const { checked } = event.target
        setInStock(checked)
        filterProducts(search, checked)
    }

    return(
        <>
        <input type="text" value={search} onChange={handleInputChange} />
        <input type="checkbox" value={inStock} onChange={handleCheckChange}/>
        <p>Only in stock</p>
        </>
    )
}

export default SearchBar