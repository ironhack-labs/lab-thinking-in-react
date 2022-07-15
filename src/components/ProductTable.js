import React, { useState } from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  const products = props.products;
  return (
    <>
      <div className="productsTable">ProductTable</div>
      <table>
        <thead>
          <tr>
            <td>
              <h3>Name</h3>
            </td>
            <td>
              <h3>Price</h3>
            </td>
            <td>
              <h3>Stock</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <ProductRow key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </>
  );
}
