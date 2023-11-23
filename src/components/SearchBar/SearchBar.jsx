import { useState } from "react"
const SearchBar = ({ filterProduct }) => {

    const [productName, setProductName] = useState("")

    const handleValue = e => {

        const { value } = e.target

        setProductName(value)
        filterProduct(value)
    }

    return (
        <>
            <h2>barra de busqueda</h2>
            <p>Search</p>
            <input type="text" value={productName} onChange={handleValue} />


            <input type="checkbox" />
            <label> Only show products in stock</label>

        </>


    )
}

export default SearchBar