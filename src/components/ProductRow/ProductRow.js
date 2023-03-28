import React from 'react'

function ProductRow({ name, price, inStock }) {

  let color = ''
  !inStock ? color = 'red' : color = 'black' 

  return (
    <tr>
      <td style={{color: `${color}`}}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow