import React from 'react';

import ProductRow from '../ProductRow/ProductRow';

import '../ProductTable/ProductTable.css';

const ProductTable = ({ products }) => {
  return (
    <table className="table">
      <thead className="table_title">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {products.map((product) => {
            return <ProductRow product={product} />;
          })}
      </tbody>
    </table>
  );
};

export default ProductTable;
