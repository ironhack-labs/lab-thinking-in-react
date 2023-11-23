// src/components/ProductsPage.js

import { useState } from 'react'
import jsonData from './../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import ProductRow from './ProductRow'

function ProductsPage() {
    const [products, setProducts] = useState(jsonData)
    const [searchQuery, setSearchQuery] = useState('')
    const [inStock, setInStock] = useState(false)

    const handleSearchChange = (event) => {
        const newSearchQ = event.target.value
        setSearchQuery(newSearchQ)
        filterProducts(newSearchQ, inStock)

    }

    const handleStockChange = (event) => {
        const newInStock = event.target.checked
        setInStock(newInStock)
        filterProducts(searchQuery, newInStock)
    }

    const filterProducts = (query, inStock) => {
        const filteredProducts = jsonData.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) &&
            (product.inStock || !inStock)
        )
        setProducts(filteredProducts)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar
                handleSearchChange={handleSearchChange}
                handleStockChange={handleStockChange}
                inStock={inStock}
            />
            <ProductTable products={products} />
        </div>
    );
}
export default ProductsPage