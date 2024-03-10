import React from 'react'
import { useState } from 'react';
import Table from './Table';
import jsonData from '../data.json'
import SearchBar from './SearchBar';
function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    // filter prod
    const filterProducts = (wordToSearch) => {
        setProducts(products.filter((product) => {
            return product.name.toLocaleLowerCase().includes(wordToSearch)
        }))
    }
    return (
        <div>
            <h1>IronStore</h1>
            <Table products={products} />
            <SearchBar filterProducts={filterProducts} />

        </div>

    )
}

export default ProductsPage