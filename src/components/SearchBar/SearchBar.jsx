import { useState } from "react"

const SearchBar = props => {

    const [searchForm, setSearchForm] = useState({
        searchInput: "",
        stock: false
    })

    const handleInputChange = e => {
        const { value, name, checked } = e.target
        setSearchForm({
            ...searchForm,
            [name]: value,
            "stock": checked
        })
    }


    return (
        <>
            <label htmlFor="searchInput" > Search
                <input type="text" name="searchInput" onChange={handleInputChange} />
            </label>
            <label htmlFor="checkbox">
                <input type="checkbox" name="stock" onChange={handleInputChange} />
                Only show products in stock
            </label>
        </>
    )
}
export default SearchBar
