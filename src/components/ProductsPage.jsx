import React from 'react'
import { useState } from 'react'
import productData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {

    const [productsArray, setProducts] = useState(productData)
    const [inStock, setInStock] = useState(false)
    const [searchText, setSearchText] = useState('')
   

    function sortByPrice() {
      let newList = [...productsArray];
    
      newList.sort((a, b) => {
        // Convert price strings to numbers
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
        
        return priceA - priceB;
      });
    
      setProducts(newList);
    }

    function showStockOnly(){

      if (!inStock){
        let newList = [...productData].filter((product)=>{return (product.inStock === true)});
        setProducts(newList)
        setInStock(true)
      }else{
        setProducts(productData)
        setInStock(false)
      }
    }

    function searchList(searchText){
      setSearchText(searchText)
      let newList = [...productData].filter((product)=>{return product.name.includes(searchText)})
      setProducts(newList)
    }

  return (
   
        <>
        <h1>Iron Store</h1>
        <SearchBar sortByPrice = {sortByPrice} inStock = {inStock} showStockOnly={showStockOnly} searchText = {searchText} searchList={searchList}></SearchBar>
        <ProductTable productsArray={productsArray}></ProductTable>
        </>
    
  )
}

export default ProductsPage