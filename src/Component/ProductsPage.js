

import React, { useState } from 'react'
import goodsData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {

    const [products,setProducts] = useState(goodsData)

    function sortByPrice(){

      let sortedItems = [...products].sort((a,b)=> parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)))

      setProducts(sortedItems)
  }

    function sortByName(){

        let sortedItems = [...products].sort((a,b)=> a.name.localeCompare(b.name))
       
        setProducts(sortedItems)
    }


  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar setProducts = {setProducts} products ={products} allProducts = {goodsData} sortByPrice={sortByPrice} sortByName={sortByName} />
        <br />
        <br />
        <h2><ProductTable products= {products}/></h2>

    </div>
  )
}

export default ProductsPage