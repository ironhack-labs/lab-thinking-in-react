import React from 'react'

const ProductRow = (props) => {

  return (
    <tr key={props.product.id}>
      <td style={{color: props.product.inStock ? 'black' : 'red'}}> {props.product.name} </td>
      <td>{props.product.price}</td>
    </tr>
  )
}

export default ProductRow;