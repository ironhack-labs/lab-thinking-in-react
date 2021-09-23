import React from 'react'
import ProductTable from './ProductTable/ProductTable'
import SearchBar from './SearchBar/SearchBar'

export default function FilterableProductTable(){

    return (

        <div>
            <h1> Iron Store</h1>
            <SearchBar/>
            <ProductTable/>
        </div>
    )
}