import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            return (
              <ProductRow
                key={product.id}
                price={product.price}
                name={product.name}
                inStock={product.inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
