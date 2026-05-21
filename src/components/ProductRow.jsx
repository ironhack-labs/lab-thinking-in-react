import React from 'react'


export default function ProductRow({product}) {

  return (
    <div>
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td style={{color: product.inStock ? 'green' : 'red'}}>{product.inStock ? 'In Stock' : 'Not Available'}</td>
        </tr>
    </div>
  )
}
