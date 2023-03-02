import { useState } from "react"
import { products } from './../../data.json'


const SearchBar = () => {

    const [searchProduct, setSearchProduct] = useState('')
    const [productBackUp, setProductsBackUp] = useState({ products })
    const handleSearch = e => {
        setSearchProduct(e.target.value)
    }

    const filterProducts = () => {
        const filteredProducts = productBackUp.filter //{elm => elm.name} -->Nos Hemos quedado aqui 
    }


    return <div className="filteredProducts">
        <input value={searchProduct} onChange={handleSearch} />
    </div>

}

export default SearchBar