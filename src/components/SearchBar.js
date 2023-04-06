import React from 'react'

const SearchBar = ({productsSearch, showProductsInStock}) => {
    console.log('SearchBar ', productsSearch)
  return (
    <div>
        <h4>Search</h4>
        <input onChange={productsSearch} placeholder="Search..."></input>
        <input onChange={showProductsInStock} type="checkbox"></input><label>Only show products in stock</label>

    </div>
  )
}

export default SearchBar