import './SearchBar.css'
import { useState } from "react"

const SearchBar = ({ filterProductsByName, products }) => {

    const [nameQuery, setNameQuery] = useState('')

    const handleQueryChange = e => {
        const inputValue = e.target.value
        setNameQuery(inputValue)
        filterProductsByName(inputValue)
    }

    const handleStockInput = () => {
        products.filter(products.inStock)
        const filteredProductsByStock = products.filter(elm => elm.inStock === true)
        // setProducts(filteredProducts)
    }


    return (
        <>
            <form className="productsSearch">
                <input type="text" placeholder="Introduce tu búsqueda" value={nameQuery} onChange={handleQueryChange} />
            </form>

            <input type="checkbox" onChange={handleStockInput} /> <label>Productos en stock</label>

        </>

    )
}

export default SearchBar