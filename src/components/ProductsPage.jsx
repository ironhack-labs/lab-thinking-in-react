import { useState } from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData)
    const [filter, setFilter] = useState(jsonData)

    return (
        <>
            <h1>IronStore</h1>
            <SearchBar
                jsonData={jsonData}
                products={products}
                setProducts={setProducts}
                setFilter={setFilter}
            />

            <ProductTable products={filter} />
        </>
    )
}

export default ProductsPage