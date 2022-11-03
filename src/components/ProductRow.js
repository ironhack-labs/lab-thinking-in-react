import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar';

 function ProductRow(props) {

 

  
  return (
    <div className='productRow'>
        {props.queryState}
    <h1>ProductRow</h1>
 

          
          
        <div>
          {console.log({INPUTFORROW: props.stateGet.query})}


            {/*  even in conditionals there MUST be a 1 single parent with NO siblins */}
   

        {( props.stateGet.query === "" ? props.products.map(product => {

          return !product.inStock ? 
          <div> <span className='outOfStock'>{product.name}</span>  <span>{product.price}</span></div> : 
          <div> <span>{product.name}</span>  <span>{product.price}</span></div>

        }):
          
          props.stateGet.list.map(product => {
          
            return !product.inStock ? 
            <div> <span className='outOfStock'>{product.name}</span>  <span>{product.price}</span></div> : 
            <div> <span>{product.name}</span>  <span>{product.price}</span></div>
        }))}


        </div>


         
        
        
        



        
        
    </div>
  )
}


export default ProductRow;