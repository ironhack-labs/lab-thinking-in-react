import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable({ filteredData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow filteredData={filteredData} />
      </tbody>
    </table>
  );
}
