import React, { Component } from 'react';

const ProductRow = props => {
  //category={product.category} price={product.price} stocked={product.stocked} name={product.name} 

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  )
}

export default ProductRow;