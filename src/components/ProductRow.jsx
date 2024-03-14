import React from 'react'
import products from '../data.json'


function ProductRow({product}) {
  return (
    <div>
    <table className="table">
    <tr>
      <th> Name</th>
      <th>Price</th>
    </tr >
    <tbody>
      {products.map((product) => 
      <tr key={product.id} product={product}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
      )}
      
    </tbody>
    </table>
    </div>
  )
}

export default ProductRow