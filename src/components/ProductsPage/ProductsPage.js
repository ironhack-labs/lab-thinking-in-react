import React, { useState } from 'react'
import jsonData from '../../data.json'
import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'

function ProductsPage() {

  const [products, setProducts] = useState(jsonData)
  const [searchValue , setSearchValue] = useState('')

  const handleChangeValue = (value) => {
    setSearchValue(value)
  }
  console.log(searchValue)
  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>IronStore</h1>
      <SearchBar onChange={handleChangeValue} />
      <ProductTable products={products} searchValue={searchValue} />
    </div>
  )
}

export default ProductsPage