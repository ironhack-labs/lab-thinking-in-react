import React from 'react';

import ProductRow from '../ProductRow/ProductRow';

import '../ProductTable/ProductTable.css';

const ProductTable = ({ filteredProducts }) => {
  return (
    <table className="table">
      <thead className="table_title">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {filteredProducts.map((product) => {
            return <ProductRow product={product} key={product.id} />;
          })}
      </tbody>
    </table>
  );
};

export default ProductTable;
