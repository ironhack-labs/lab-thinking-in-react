import React from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from './ProductTable'

export default function FilterableProductTable() {
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable />
    </div>
  )
}
