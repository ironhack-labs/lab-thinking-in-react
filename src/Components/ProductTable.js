import React from 'react'
import {ProductRow} from "./ProductRow"
export const ProductTable = (props) => {
    const { products,search} =props


  return (
    <div>
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th className='col'>Name</th>
                    <th className='col'>Price</th>
                </tr>
            </thead>
            <tbody>
                {search.length>0? search.map(product=>(
                 <ProductRow name = {product.name} price ={product.price} inStock={product.inStock}/>
            )) : products.map(product=>(
                <ProductRow name = {product.name} price ={product.price} inStock={product.inStock}/>
                )) }
            
            </tbody>
        </table>

        
    </div>
  )
}
