import React from 'react'
import jsonData from '../data.json';
import {useState} from 'react'
import SearchBar from './SearchBar';
function ProductRow({search}) {
  const [products, setProducts] = useState(jsonData);
  return (
   
    <div className='ProductRow'>
   <h1>Products Page </h1>
      {products
      .filter((oneFilteredStudent)=>{
        if(oneFilteredStudent.name.includes(search))
        
        return oneFilteredStudent.name
      })
      .map((products)=> {
        return  <h1>{products.name}</h1>
        
      })
     
    }
    
    </div>
  )
}

export default ProductRow;