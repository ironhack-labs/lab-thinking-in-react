import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ filteredData }) => {
  return (
    <table className="table">
      <thead className="thead">
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

export default ProductTable;