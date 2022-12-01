import ProductRow from "../ProductRow/ProductRow"
import { useState } from "react";

const [filteredProd, setfilteredProd] = useState('')

const SearchBar = ({ products, setProducts }) => {

    const handleInput = (e) => {
        const filteredProducts = products.filter((elm) =>
            elm.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setProducts(filteredProducts);
    }

    return (
        <div>
            <input onChange={handleInput} size="20" value={filteredProd} placeholder="Search">

            </input>
        </div>
    )
}

export default SearchBar