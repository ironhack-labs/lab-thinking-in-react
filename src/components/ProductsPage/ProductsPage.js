import React, { useState } from 'react'
import data from '../../data.json'

import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'


const ProductsPage = () => {
  const [products, setProducts] = useState(data)

  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar/>
        <ProductTable products={products}/>
    </div>
  )
}

export default ProductsPage