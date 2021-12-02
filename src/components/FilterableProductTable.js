import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


const FilterableProductTable = (props) => {
  
    let productsFilter = [] 
    let enStock = [] 

    const sendInfo = (search) => {
        console.log(props.products)
        productsFilter = props.products?.filter((elm) => elm.name.toLowerCase() === search.searchbar)
        enStock = props.products?.filter((elm) => elm.stocked === true && search.checkbox)

        return {
            productsFilter, enStock
        }
            
        
    }

    return (
      <div>
        <h1>Iron Store</h1>
        <SearchBar sendInfo={sendInfo}/>
        <ProductTable search={productsFilter} enStock={enStock} {...props}/>
            
      </div> 

    )



  
}

export default FilterableProductTable