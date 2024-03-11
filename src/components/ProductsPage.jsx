import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import jsonData from '../data.json'
import "../App.css";

const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData);

    const filterProducts = (wordToSearch) => {
        setProducts (jsonData.filter((product) => {
            return product.name.toLocaleLowerCase().includes(wordToSearch)
        }))
    }
    return (
        <div>
            <h1>IronStore</h1>
            <ProductTable products = {products}/>
            <SearchBar filterProducts={filterProducts} />

        </div>

    )
}

export default ProductsPage
