import React, { useState } from 'react'

const SearchBar = ({ filteredProduct }) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [inStock, setInStock] = useState(false)

  const handleSearch = (e) => {
    const keyword = e.target.value
    setSearchKeyword(keyword)
    filteredProduct(keyword, inStock)
  }

  const handleCheck = (e) => {
    const inStock = e.target.checked
    setInStock(inStock)
    filteredProduct(searchKeyword, inStock)
  }
  return (
    <div className='SearchBar'>
      <input type="text" value={searchKeyword} onChange={handleSearch} />
      <input type="checkbox" onChange={handleCheck} checked={inStock} />
      <label htmlFor="checkbox">Only show products in stock</label>
    </div>
  )
}

export default SearchBar