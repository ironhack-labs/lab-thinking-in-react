import React from 'react'

function ProductRow({name,price,inStock}) {
  let color
inStock ? color = "black" : color = "red"
  return (
    <tr style={{color:`${color}`}}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow