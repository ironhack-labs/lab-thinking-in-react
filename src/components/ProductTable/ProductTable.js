import React, { useState } from 'react';
import ProductRow from '../ProductRow/ProductRow';
const ProductTable = ({ data, query }) => {
    
  console.log(query);

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        {query
          ? data
              .filter(({ name }) =>
                name.toLowerCase().includes(query.toLowerCase())
              )
              .map((product) => (
                <ProductRow key={product.id} product={product} />
              ))
          : data.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
