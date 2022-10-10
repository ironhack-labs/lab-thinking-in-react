import React from 'react'

const ProductRow = (props) => {
  const {name, price, inStock } = props.product
  const color = inStock ? 'black' : 'red'
  return (
    <tr>
      <td style={{ color: color }}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow;