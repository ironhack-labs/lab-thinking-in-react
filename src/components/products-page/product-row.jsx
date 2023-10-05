import React from 'react'

function ProductRow({product}) {

  const {name, price, inStock} = product;

  return (
    <tr>
      <td style={{color: inStock ? 'green' : 'red'}}>{name}</td>
      <td>{price}</td>
    </tr>
  )

}

export default ProductRow;