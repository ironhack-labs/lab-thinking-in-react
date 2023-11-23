import { useState } from "react";

const SearchBar = ({ filterProducts, filterStock }) => {

    const handleChange = e => {

        filterProducts(e.target.value)
    }

    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!checked)
        if (checked) {
            filterStock()
        }
    }

    return (
        <>
            <p>Search</p>
            <input type="text" onChange={handleChange} />
            <input type="checkbox" checked={checked} onChange={handleCheck} /> <p>Only show products in stock</p>

        </>
    )
}

export default SearchBar