import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({products}) {
  return (
    <div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>category</th>
            </tr>
        </thead>
        <tbody>
        {products.map((product,index) => (
            
            <tr ProductRow key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
    </table>
    
    </div>
  )
}

export default ProductTable