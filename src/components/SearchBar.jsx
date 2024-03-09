import React from 'react'

export default function SearchBar({inStockFeature, searchFeature}) {

  return (
    <div className="search">
        <div className="search-bar">
            <p>Search</p>
            <input type="type" name="search" placeholder="Search..." onChange={searchFeature}></input>
        </div>

        <div className="inStock-search">
            <input type="checkbox" name="productInStock" onChange={inStockFeature}></input>
            <label>Only show products in stock</label>
        </div>

    </div>
  )
}
