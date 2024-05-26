import React from 'react'
import { useState } from 'react'
import jsonData from "../data.json"
import Searchbar from './Searchbar'
import ProductTable from './ProductTable'

function ProductsPage() {
    const [products, setProducts] = useState(jsonData)
  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
        <Searchbar products={products} />
        <ProductTable products={products} />
    </div>
  )
}

export default ProductsPage