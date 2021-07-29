import React from 'react'
import ProductTable from "./product/ProductTable"
import SearchBar from './search-bar/SearchBar'


function FilterableProductTable ({ products }) {
    

    return(
        <div>
        <SearchBar />
        <ProductTable products= {products} />
        </div>
    )
}

export default FilterableProductTable