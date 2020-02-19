import React from 'react';
import Availability from './Availability';

export default function ProductRow({ products }) {

  return (
    <>
      {products.map((product, i) => (
        <tr key={i}>
          <td style={{ color: product.stocked ? 'green' : 'red' }}>
            <Availability inStock={product.stocked} /> {product.name}
          </td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  );
}
