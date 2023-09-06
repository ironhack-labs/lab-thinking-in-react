import React from 'react';

function ProductsRow({ product }) {
  const { name, price, inStock } = product;

  return (
    <tr style={{ color: inStock ? 'white' : 'red' }}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductsRow;
