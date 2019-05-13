import React from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from './ProductTable'

export default function FilterableProductTable() {
  return (
    <div className="container">
      <h1 className="title">IronStore</h1>
      <SearchBar />
      <ProductTable />
    </div>
  )
}
