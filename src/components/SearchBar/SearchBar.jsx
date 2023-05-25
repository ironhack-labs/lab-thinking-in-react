import './SearchBar.css'
import { useState } from 'react'

const SearchBar = ({ filterProductsByName }) => {

    const [productQuery, setProductQuery] = useState('')
    console.log(productQuery)

    const handleQueryChange = e => {
        const inputValue = e.target.value
        setProductQuery(inputValue)
        filterProductsByName(inputValue)
    }

    return (
        <div>
            <h3>Search</h3>
            <form className="SearchBar">
                <input type="text" placeholder="Busca un producto..." value={productQuery} onChange={handleQueryChange} />
            </form>
            <input type="checkbox" />
        </div>
    )
}

export default SearchBar