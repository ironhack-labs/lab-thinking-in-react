import { useState } from "react"

const SearchBar = ({ filterListByName }) => {

    const [nameQuery, setNameQuery] = useState('')
    const handleQueryChange = e => {
        const inputValue = e.target.value
        setNameQuery(inputValue)
        filterListByName(inputValue)
    }


    return (

        <div>
            <p>Search</p>
            <form >
                <input type="text" placeholder="Search products" value={nameQuery} onChange={handleQueryChange} />
            </form>
            <p>Only show products in stock</p>
            <input type="checkbox" name="" id="" />

        </div>

    )

}



export default SearchBar