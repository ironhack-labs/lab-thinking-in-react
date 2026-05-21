import React, {useState} from 'react';
import ProductRow from './ProductRow.jsx'

export default function ProductTable({products}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>In Stock</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product,index)=>(
                    <ProductRow key={index} product={product}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}
