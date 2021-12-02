import React from "react"
import { useState } from "react"

const SearchBar = (props) => {

    const [query, setQuery] = useState("")

    const handleSearch = (e) => {
        let userQuery = e.target.value
        setQuery(userQuery)
        props.searchProducts(userQuery)
    }

    return (
        <div className="search-bar">
            <label htmlFor="search">Search the site:</label>
            <input type="search" name="searchQuery" value={query} onChange={handleSearch} />
            <button>Search</button>
        </div>
    )
}

export default SearchBar