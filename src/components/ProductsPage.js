import React from 'react'
import { useState } from 'react'
import jsonData from './../data.json'
import ProductTable from './ProductTable'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData)
  return (
    <div>
      <h1>IronStore</h1>
      <ProductTable products={jsonData}/>
    </div>
  )
}

export default ProductsPage