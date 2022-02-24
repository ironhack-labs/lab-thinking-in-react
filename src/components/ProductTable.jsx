import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable({ products }) {
  return (
    <div>
      <table width="90%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow product={product} key={product.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
