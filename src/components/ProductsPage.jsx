import React, { useState } from 'react'
import productsList from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {

  const [products, setProducts] = useState(productsList)

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='font-black text-5xl text-white my-8'>Iron Store</h1>
      <SearchBar />
      <ProductTable productsList={productsList} />
    </div>
  )
}

export default ProductsPage