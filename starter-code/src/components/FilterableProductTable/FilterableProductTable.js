import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import ProductTable from "../ProductTable/ProductTable"

const FilterableProductTable =(props)=>{
  const productArr = props.products;
  
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable products={productArr}/>
    </div>
  )
}

export default FilterableProductTable