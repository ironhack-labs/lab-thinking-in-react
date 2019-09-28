
import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = (props) => {
  console.log(`Props from Filterable Product Table (FPT)`, props)
  return (
    <div className="filterable-product-table">
        <h2>Filterable Product Table</h2>
        <SearchBar />
        <ProductTable productsFromFPT={ props }/>
    </div>
  )
}

export default FilterableProductTable;