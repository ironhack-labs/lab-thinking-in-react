import React from 'react'
import './ProductRow.css'


function ProductRow({product}) {


  return (
    <tr>
    <td>
      {product.name}
    </td>

    <td>   
    <div >{product.price}</div>
    </td>
  </tr>
  
  )
}

export default ProductRow