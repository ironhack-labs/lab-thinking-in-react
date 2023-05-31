import { useState } from 'react';
import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products, searchBox, searchCheckedBox }) {
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        {products
          .filter((oneProduct) => {
            if (
              oneProduct.name.toLowerCase().includes(searchBox.toLowerCase())
            ) {
              return true;
            }
          })
          .filter((ProductInStock) =>
            searchCheckedBox ? ProductInStock.inStock : true
          )

          .map((product) => {
            return <ProductRow key={product.name} oneProduct={product} />;
          })}
      </table>
    </div>
  );
}

export default ProductTable;
