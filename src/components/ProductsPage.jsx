import React, { useState } from 'react'
import data from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {

  const [products, setProducts] = useState(data)

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='font-black text-5xl text-white my-8'>Iron Store</h1>
      <SearchBar />
      <ProductTable />
    </div>
  )
}

export default ProductsPage