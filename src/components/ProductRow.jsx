import React from 'react'

function ProductRow({product}) {
  return (
    
    <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
    </tr>

  )
}

export default ProductRow