import React from 'react';
import Product from './Product';

export default function ListOfProduct({ allProducts }) {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {allProducts.map((product, i) => (
          <Product
            key={i}
            name={product.name}
            price={product.price}
            stocked={product.stocked}
          />
        ))}
      </tbody>
    </table>
  );
}
