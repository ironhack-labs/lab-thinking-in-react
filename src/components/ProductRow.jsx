import React from 'react';

function ProductRow({ product }) {
  return (
    <tr className={!product.inStock ? 'out-of-stock' : ''}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
