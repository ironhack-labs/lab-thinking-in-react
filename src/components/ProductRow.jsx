import React from 'react'

const ProductRow = ({ product }) => {
  return (
    <tr>{product.inStock ? (
      <td style={{ color: 'black', height: 40 }}>{product.name}</td>
    ) : (
      <td style={{ color: 'red', height: 40 }}>{product.name}</td>)}
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow