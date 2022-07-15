import React from 'react';

export default function ProductRow(props) {
  const product = props.product;
  console.log('stock ==>', product.name, '==>', product.inStock);
  return (
    <tr key={product.id}>
      {product.inStock ? (
        <td>{product.name}</td>
      ) : (
        <td style={{ color: 'red' }}>{product.name}</td>
      )}
      <td>{product.price}</td>
      <td>{product.inStock ? 'true' : 'false'}</td>
    </tr>
  );
}
