import React, { Component } from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  let allProducts = props.products
    .filter(product => {
      return product.name.includes(props.search);
    })
    .map(product => {
      return <ProductRow product={product} />;
    });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{allProducts}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
