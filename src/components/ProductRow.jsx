import React from 'react'

function ProductRow(props) {
    let product = props.product
  return (
    <tr key={product.id} className={product.stocked ? '' : 'red'}>
        <td>{product.name}</td>
        <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow;