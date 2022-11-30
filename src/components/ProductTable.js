import React from 'react';
import { ProductRow } from './ProductRow';
export const ProductTable = ({ products }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          
            <ProductRow products={products} />
          
        </tbody>
      </table>
    </div>
  );
};
