import React from 'react';

function ProductRow({ product }) {
  const { name, description, price, inStock } = product;

  return (
    <tr>
      <td style={{ color: inStock ? 'black' : 'red' }}>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;