import { useState } from "react";

const SearchBar = ({ FilterProduct }) => {

    const [query, setquery] = useState('')

    const handleChange = e => {
        setquery(e.target.value)
        FilterProduct(e.target.value)
    }

    return (
        <div className="FilterProduct">
            <input type= "search" onChange={handleChange} value={query} >
              
            </input>
        </div>
    )
}

export default SearchBar