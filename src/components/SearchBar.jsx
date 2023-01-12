import { useState } from 'react';


function SearchBar (props) {
  
    const { products, setProducts } = props
    const [userFilter, userSetFilter] =useState('')


    const copyOfArray = [...products]
    

    const filterFunction = (event) => {
        userSetFilter(event.target.value)
        const productsFilter = copyOfArray.filter(product=>{
       return product.name.toLowerCase().includes(userFilter.toLowerCase())
    })
        setProducts(productsFilter)
    }

    const isInStock = (event) =>{
        //trying to reset products' initial array value here but the Array is already modified and can't go back
        if (!event.target.checked){
            setProducts(copyOfArray)
        } 
       let productsInStock = copyOfArray.filter(product=>{
            return product.inStock === true
        })

        setProducts(productsInStock)
    }
   

  return(
      <div>
        <h1>Filter by products' name:</h1>
        <div className='column-flex'>
        <input onChange={(event)=> filterFunction(event) } value={userFilter} className='input' type="search"></input>
            <div>
            <input onClick={(event)=>isInStock(event)} type="checkbox" placeholder='Only show products in stock'></input>
            <label>Only show products in stock</label>
            </div>
        </div>
      </div>    
  )
}

export default SearchBar