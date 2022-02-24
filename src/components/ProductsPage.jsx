import { useEffect, useState } from 'react'
import jsonData from './../data.json'
import ProductsTable from './ProductTable'
import SearchBar from './SeachBar'

function ProductsPage() {
    const [products, setProducts] = useState(jsonData)
    const loadProducts = (filter) => {
        let filteredProduct = jsonData

        if (filter.checked)
            filteredProduct = filteredProduct.filter(elm => {
                return elm.inStock

            })

        filteredProduct = filteredProduct.filter(elm => {
            console.log(elm, elm.name.toLowerCase().includes(filter.search.toLowerCase()));
            return elm.name.toLowerCase().includes(filter.search.toLowerCase())
        })
        setProducts(filteredProduct)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProducts={loadProducts} />
            <ProductsTable theProducts={products} />
        </div>
    )
}
export default ProductsPage