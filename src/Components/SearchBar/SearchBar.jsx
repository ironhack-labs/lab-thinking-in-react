import { useState } from "react"

const SearchBar = ({ filterData }) => {
    const [textQuery, setTextQuery] = useState('')
    const [checkQuery, setCheckQuery] = useState(false)

    const handleSearch = e => {
        const inputValue = e.target.value
        setTextQuery(inputValue)
        filterData(inputValue)
    }

    const handleStock = e => {
        const inputValue = e.target.checked
        setCheckQuery(inputValue)
        filterData(inputValue)
    }

    return (
        <>
            <label htmlFor="">SEARCH: </label>
            <input type="text" placeholder="Search..." value={textQuery} onChange={handleSearch} />
            <br />
            <label htmlFor="">ONLY PRODUCTS IN STOCK</label>
            <input type="checkbox" onChange={handleStock} checked={checkQuery} />
        </>
    )
}

export default SearchBar