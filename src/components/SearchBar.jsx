import { useState } from 'react';

function SearchBar (props) {
  
    const { products, setProducts } = props
    const [userFilter, userSetFilter] =useState('')


    const copyOfArray = [...products]   
    const productsFilter = copyOfArray.filter(product=>{
       return product.name.toLowerCase().includes(userFilter.toLowerCase())
    })

    const filterFunction = () => {
        setProducts(productsFilter)
    }
   

  return(
      <div>
        <h1>Search:</h1>
        <div className='column-flex'>
        <input onChange={(event)=> {userSetFilter(event.target.value)
            filterFunction()}
        } value={userFilter} className='input' type="text"></input>
            <div>
            <input type="checkbox" placeholder='Only show products in stock'></input>
            <label>Only show products in stock</label>
            </div>
        </div>
      </div>    
  )
}

export default SearchBar