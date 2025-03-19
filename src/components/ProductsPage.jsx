import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useState } from "react";
import jsonData from "../data.json"


  

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

  return (
    <>
  

    <section>
    <ProductTable/>
    </section>
        
    
    </>
  )
}

export default ProductsPage