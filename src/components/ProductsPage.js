import React from 'react'
import { useState } from 'react'
import jsonData from './../data.json'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData)
  const onChangeSearch = (text) => {
    setProducts((prevProducts) => {
      return jsonData.filter(product => product.name.indexOf(text) !== -1)
    })
  }
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onChangeSearch={onChangeSearch}/>
      <ProductTable products={products}/>
    </div>
  )
}

export default ProductsPage