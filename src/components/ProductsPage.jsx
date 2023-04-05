import React, { useState } from 'react'
import productsList from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {

  const [products, setProducts] = useState(productsList)
  const [searchProduct, setSearchProduct] = useState('')
  const [showInStock, setShowInStock] = useState(false)

  const handleSearch = (event) => {
    setSearchProduct(event.target.value)
  }

  const handleInStock = (event) => {
    if (!showInStock) {
      setShowInStock(event.target.value)
    } else setShowInStock(false)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='font-black text-5xl text-white my-8'>Iron Store</h1>
      <SearchBar searchProduct={searchProduct} handleSearch={handleSearch} showInStock={showInStock} handleInStock={handleInStock} />
      <ProductTable productsList={productsList} searchProduct={searchProduct} showInStock={showInStock} handleInStock={handleInStock} />
    </div>
  )
}

export default ProductsPage