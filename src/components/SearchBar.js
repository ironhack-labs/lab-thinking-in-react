import React from 'react'

const SearchBar = ({productsSearch, showProductsInStock}) => {
    console.log('SearchBar ', productsSearch)
  return (
    <div>
        <h4>Search</h4>
        <input onChange={productsSearch} placeholder="Search..." />
        <br />
        <input onChange={showProductsInStock} type="checkbox" /><label>Only show products in stock</label>

    </div>
  )
}

export default SearchBar