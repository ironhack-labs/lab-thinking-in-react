import React from 'react';
import Product from './Product';

export default function ProductTable(props) {
  return (
    <>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((p, i) => (
          <Product key={i} name={p.name} price={p.price} />
        ))}
      </tbody>
    </>
  );
}
