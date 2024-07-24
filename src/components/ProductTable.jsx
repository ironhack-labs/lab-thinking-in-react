import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({productsArray}) {
  return (
    
    <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    {productsArray.map((product)=>{
        return (
            <ProductRow product = {product}></ProductRow>
        )
    })}
    </table>
    )
  
}

export default ProductTable