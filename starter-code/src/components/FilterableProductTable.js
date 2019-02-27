import React from "react"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

const FilterableProductTable = ({
  products,
  onChangeSearch,
  onChangeStock
}) => (
  <div>
    <SearchBar onChangeSearch={onChangeSearch} onChangeStock={onChangeStock} />
    <ProductTable products={products} />
  </div>
)

export default FilterableProductTable
