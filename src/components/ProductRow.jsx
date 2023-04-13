import React from 'react'

const ProductRow = ({ product }) => {
  const nameClass = product.inStock ? "in-stock" : "out-of-stock";
  return (
    <>
      <tr>
        <td className={nameClass}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  )
}

export default ProductRow