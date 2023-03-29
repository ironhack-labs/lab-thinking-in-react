import React, { useEffect } from 'react'
import { useState } from 'react'
import jsonData from '../data.json'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'


export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [showStock, setShowStock] = useState(false)

  useEffect(() => {
    setProducts(jsonData)
  }, [])

  const onSearch = (value) => {
    setSearch(value)
  }

  const onShowStock = () => {
    setShowStock(!showStock)
  }

  const productsToShow = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => showStock === false || p.inStock)



  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search} onSearch={onSearch} onShowStock={onShowStock} />
      <ProductTable products={productsToShow} />
    </div>
  )
}
