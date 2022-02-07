import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ productData }) {
  return (
    <div className="product-table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow productData={productData} />
      </table>
    </div>
  );
}

export default ProductTable;
