
import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
//import productList from '../../src/data.json'

const FilterableProductTable = () => {
  //const data = productList

  return (
    <div className="filterable-product-table">
        <h2>Filterable Product Table</h2>
        <SearchBar />
        <ProductTable />
    </div>
  )
}

export default FilterableProductTable;