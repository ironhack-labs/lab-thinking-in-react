import './ProductsPage.css'
import SearchBar from '../searchBar/SearchBar'
import Products from './../../data.json'
import ProductsTable from '../productTable/ProductTable'
import { useState } from 'react'

const [prodSearched, setProdSearched] = useState

const ProductsPage = () => {
    return (
        <div>
            <h1>Iron Store</h1>
            <SearchBar theProducts={Products}></SearchBar>
            <ProductsTable theProducts={Products} ></ProductsTable>
        </div>

    )
}

export default ProductsPage