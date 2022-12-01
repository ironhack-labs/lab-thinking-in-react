import { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ filterProducts }) => {

    const [query, setQuery] = useState('')

    const handleSearch = event => {
        setQuery(event.target.value)
        filterProducts(event.target.value)
    }

    return (
        <form className='SearchBar'>
            <div className="mb-3">
                <label for="search" class="form-label">Search</label>
                <input onChange={handleSearch} type="text" class="form-control" id="search" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Only show products in stock</label>
            </div>
        </form>
    )
}

export default SearchBar