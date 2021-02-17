import React from 'react';

function ProductRow({ product, id }) {
  return (
    <tr key={id}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
