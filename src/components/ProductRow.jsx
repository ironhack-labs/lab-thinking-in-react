import React from 'react'

const ProductRow = ({ product }) => {
  return (
    <tr className={!product.inStock && "table-danger"}>
      <td>{product.inStock ? <span>{product.name}</span> : <span className='unavailable'>{product.name}</span>}</td>
      <td>{product.price}</td>
      <td><span class="badge rounded-pill text-bg-secondary">{product.category}</span></td>
    </tr>
  )
}

export default ProductRow