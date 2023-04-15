// src/components/ProductRow.js

import React from 'react';

function ProductRow (props) {
  const product = props.product;
  const name = product.inStock ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow;
