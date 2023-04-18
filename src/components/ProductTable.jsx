import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <ProductRow products={products} />
    </table>
  );
};

export default ProductTable;
