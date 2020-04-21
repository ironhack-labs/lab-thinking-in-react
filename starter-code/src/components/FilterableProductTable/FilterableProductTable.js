import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import ProductTable from "../ProductTable/ProductTable"

const FilterableProductTable =(props)=>{
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable />
    </div>
  )
}

export default FilterableProductTable