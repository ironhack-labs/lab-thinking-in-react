/*
import React from 'react';

function ProductRow(props) {
    const { product } = props;
    
    const name = product.inStock ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  

export default ProductRow;

*/

import React from 'react';

function ProductRow(props) {
  const { product } = props;

  if (!product || !product.inStock) {
    return null; // or show a loading/error message
  }

  return (
    <tr>
      <td style={{ color: !product.inStock ? 'red' : 'black' }}>
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;

