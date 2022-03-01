import { useState } from 'react';
import React from 'react'
import data from "../data.json"
// import {ProductsPage} from './ProductsPage';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function ProductsPage(props) {
  const [products, setProducts] = useState(data);
  const [checked, setChecked] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const setSearchHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  const setCheckedHandler = (e) => {
    setChecked(e.target.checked)
  }

console.log(searchTerm)
console.log(products)
console.log(setChecked) 

  let filtered = products.data.filter((product) => {
    if( product.name.toLowerCase().includes(searchTerm)) {
      return product
    }
  });

  if(checked === true) {
    filtered = filtered.filter((product) => {
      if(product.inStock === true){
      return product
    }
  })}
  
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        products={products}
        setSearchHandler={setSearchHandler}
        setCheckedHandler={setCheckedHandler}
        search={searchTerm}
        checked={checked}
      />

      <ProductTable
        products={filtered}
      />
    </div>
  )
}
