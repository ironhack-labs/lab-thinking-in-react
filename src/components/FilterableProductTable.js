import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useState } from 'react'
import productsList from '../data.json'


const FilterableProductTable = () => {
    const [products] = useState(productsList.data)
    const [filteredProducts, setFilteredProducts] = useState(productsList.data)

    return (
        <div className="FilterableProductTable">
            <h1>IronStore</h1>
            {/* The search bar needs both the original products and a copy to be used to filter and display, and the ability to
            change the filtered products state */}
            <SearchBar
                products={products}
                filteredProducts={filteredProducts}
                setFilteredProducts={setFilteredProducts}
            />

            <ProductTable products={filteredProducts} />
        </div>
    )
}
export default FilterableProductTable;