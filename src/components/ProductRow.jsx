import React from 'react'

export default function ProductRow({ name, price, inStock }) {

  const textColor = () => {
    if (inStock) {
      return "red"
    }
    return "black"
  }

  return (
    <tr>
      <td style={{ color: textColor() }}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}
