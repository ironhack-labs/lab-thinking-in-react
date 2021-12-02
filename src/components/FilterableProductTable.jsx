import React from "react"
import ProductTable from './ProductsTable';
import SearchBar from "./SearchBar";
import { useState } from "react";
import Checkbox from "./Checkbox";

const FilterableProductTable = (props) => {
    const { products } = props

    const [searchResult, setSearchResult] = useState(products)

    const searchProducts = (query) => {
        if (query === "") {
            setSearchResult(products)
        } else {
            let filteredProducts = searchResult.filter( (prod) => prod.name.toLowerCase().includes(query.toLowerCase()))
            setSearchResult(filteredProducts)
        }
    }

    const showProductsInStock = (checked) => {

        if (checked) {
            let filteredProducts = products.filter( (prod) => prod.stocked === true)
            setSearchResult(filteredProducts)
        } else {
            setSearchResult(products)
        }
    }

    return (
        <div>
            <SearchBar searchProducts={searchProducts} />
            <Checkbox showProductsInStock={showProductsInStock} />
            <ProductTable products={searchResult} />
        </div>
    )
}

export default FilterableProductTable
