import React from 'react'

export default function ProductRow({ name, price, inStock }) {

  const textColor = inStock ? "black" : "red"
   

  return (
    <tr>
      <td style={{ color: textColor }}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}
