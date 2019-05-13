import React from 'react'

const ProductRow = ({name, price, i}) => {
  return (
    <tr>
      <td>{i}</td>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow
