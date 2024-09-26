import React from 'react'
import { useState } from 'react'
import data from "../data.json"
import SearchBar from "./SearchBar"
import ProductsTable from "./ProductTable"

function ProductsPage() {

  const [ products , setProducts ] = useState(data)
  const [ filter , setFilter ] = useState("")
  const [ onStockCheck , setOnStockCheck ] = useState(false)

  return (
    <div>
      <SearchBar filter={filter} setFilter={setFilter} onStockCheck={onStockCheck} setOnStockCheck={setOnStockCheck} />
      <ProductsTable filter={filter} products={products} onStockCheck={onStockCheck} />
    </div>
  )
}

export default ProductsPage