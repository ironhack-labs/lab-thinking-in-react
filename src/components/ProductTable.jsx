import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable({ products, query }) {
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
          {products
            .filter(product => {
              return (
                product.name.toLowerCase().indexOf(query.toLowerCase()) === 0
              );
            })
            .map(product => (
              <ProductRow product={product} key={product.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
