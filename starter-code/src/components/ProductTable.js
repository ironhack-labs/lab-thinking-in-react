import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ children }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default ProductTable;
