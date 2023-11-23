import { useState } from "react"

const SearchBar = ({ filterProduct }) => {

    const [search, setSearch] = useState("")

    const handleInputChange = e => {
        setSearch(e.currentTarget.value)
        filterProduct(e.currentTarget.value)
    }

    return (
        <div className="SearchBar">
            <label htmlFor="search">Search</label>
            <input type="search" id="search" onChange={handleInputChange} />
            {/* <input type="checkbox" id="search" onChange={handleInputChange} /> */}
        </div>
    )
}

export default SearchBar
