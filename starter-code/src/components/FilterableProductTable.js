import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableDataTable = products => (
  <div>
    <h1>IronStore</h1>
    <SearchBar />
    <ProductTable products={products}/>
  </div>
)

export default FilterableDataTable