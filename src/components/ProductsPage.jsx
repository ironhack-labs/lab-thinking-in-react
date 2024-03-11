import React from 'react'
import { useState } from 'react';
import Table from './Table';
import jsonData from '../data.json'
import SearchBar from './SearchBar';
import './Components.css'

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    // filter prod
    const filterProducts = (wordToSearch) => {
        setProducts(products.filter((product) => {
            return product.name.toLocaleLowerCase().includes(wordToSearch)
        }))
    }
    function inStock(isChecked) {
        setProducts(products.filter((product) => {
            return product.inStock
        }))
    }
    return (
        <div>
            <h1>IronStore</h1>
            <Table products={products} />
            <SearchBar filterProducts={filterProducts} inStock={inStock} product={products} />

        </div>

    )
}

export default ProductsPage