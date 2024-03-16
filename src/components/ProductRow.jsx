import React from 'react'


function ProductRow({product}) {
  return (
    <tr classname="rows">
        <td style={{color: product.inStock ? "black" : "red"}}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
  )
}

export default ProductRow

