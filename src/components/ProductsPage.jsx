import { useState } from 'react'
import jsonData from './../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage () {
  const [products, setProducts] = useState(jsonData)
  const [searchTerm, setSearchTerm] = useState('')
  const [showInStock, setShowInStock] = useState(false)

  const handleSearchChange = term => {
    setSearchTerm(term)
  }

  const handleInStockChange = inStock => {
    setShowInStock(inStock)
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesStock = showInStock ? product.inStock : true
    return matchesSearch && matchesStock
  })

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        showInStock={showInStock}
        onInStockChange={handleInStockChange}
      />
      <ProductTable products={filteredProducts} />
    </div>
  )
}

export default ProductsPage
