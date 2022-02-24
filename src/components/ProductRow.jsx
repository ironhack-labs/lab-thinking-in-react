import React from 'react';

export default function ProductRow({ product }) {
  return (
    <tr>
      <td style={{ color: product.inStock || 'red' }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
