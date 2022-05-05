import { useState } from 'react'
import jsonData from './../data.json'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
const ProductPage = () => {
    const [products, setProducts] = useState(jsonData)
    const [productsBack, setProductsBack] = useState(jsonData)
    function filter(str) {
        let filteredProducts
        str ? filteredProducts = productsBack.filter(elm => elm.name.includes(str)) : filteredProducts = productsBack
        setProducts(filteredProducts)
    }
    return (
        <>
            <h1>IronStore</h1>
            <SearchBar filter={filter} />
            <ProductTable products={products} />
        </>
    )
}
export default ProductPage