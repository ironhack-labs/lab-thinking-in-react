
import { useState } from 'react';
import jsonData from './../data.json';
import React from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable';

function ProductsPage () {
    const [products, setProducts] = useState(jsonData)
    const [query, setQuery] = useState('')
    const [checked, setChecked] = useState(false)

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar setQuery={setQuery} setChecked={setChecked}/>
        <ProductTable products={products} query={query} checked={checked}/>
      </div>    
  )
}

export default ProductsPage;