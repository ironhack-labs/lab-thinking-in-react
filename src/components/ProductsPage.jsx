import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import storeDB from '../data.json';

const ProductsPage = () => {
  const [products, setProducts] = useState(storeDB)

  const filteredProduct = (str, inStockOnly) => {
    let newList
    if (!str && !inStockOnly) {
      newList = storeDB
    } else {
      newList = storeDB.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(str.toLowerCase())
        const inStockMatch = inStockOnly ? product.inStock : true
        if (inStockOnly) {
          return nameMatch && inStockMatch
        } else {
          return nameMatch
        }
      })
    }
    setProducts(newList)
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filteredProduct={filteredProduct} />
      <ProductTable products={products} />

    </div>
  )
}

export default ProductsPage