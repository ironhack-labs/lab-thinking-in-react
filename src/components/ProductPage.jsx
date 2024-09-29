import React from 'react'
import jsonData from "../data.json";
import {useState} from "react";
import SearchBar from "./SearchBar"
import ProductTable from "./SearchBar"


function ProductPage() {
    const [products, setProducts]= useState(jsonData)
    const [searchValue, setSearchValue]= useState("")


  return (
    <div>
        <h1>Hola</h1>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <ProductTable products={products} setProducts={setProducts} searchValue={searchValue}/>
    </div>
  )
}

export default ProductPage