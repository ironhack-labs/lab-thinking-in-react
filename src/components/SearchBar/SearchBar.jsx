import { useState } from "react"

const SearchBar = ({ filterProducts}) => {

    const [ titleQuery, setTitleQuery ] = useState('')

    const handleQueryChange = event => {
        const inputValue = event.target.value
        setTitleQuery(inputValue)
        filterProducts(inputValue)
    }

    return (
        <form className="ProductSearch">
            <input type="text" placeholder="Introduce un nombre..." value={titleQuery} onChange={handleQueryChange}/>
        </form>
    )
}

export default SearchBar