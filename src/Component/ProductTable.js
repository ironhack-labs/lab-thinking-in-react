import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
  return (
    <div>ProductTable
    

    <table>
   <thead>
    <tr>
        <th> Name</th>
        <th>Price</th>
    </tr>
    </thead>
    
    {props.products.map((oneProduct)=>{
        return (
        <ProductRow oneProduct ={oneProduct}/>
    
        )
    })}
    
  </table> 

    </div>
  )
}

export default ProductTable