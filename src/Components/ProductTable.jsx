import React from 'react';
import ProductRow from './ProductRow';

export function ProductTable({ products }) {
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow key={index} index={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
