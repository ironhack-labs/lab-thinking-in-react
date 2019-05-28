import React from 'react'

const ProductRow = (props) => {
  return (
    <tr>
      {props.productsData.stocked ? 
      <td>{props.productsData.name}</td> : 
      <td style={{color:'red'}}>{props.productsData.name}</td> }
      <td>{props.productsData.price}</td>
    </tr>
  )
}

export default ProductRow

