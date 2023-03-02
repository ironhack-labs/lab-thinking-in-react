import { useState } from "react"

const SearchBar = ({ filterProducts }) => {

    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value)
        filterProducts(e.target.value)
    }

    return (

        <>
            <input

                type="text"
                value={search}
                name="search"
                placeholder="..."
                onChange={handleSearch}>

            </input>

            <input type="checkbox" />

        </>

    )
}

export default SearchBar