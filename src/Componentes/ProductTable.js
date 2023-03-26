import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      {products.map(product => (
        <ProductRow key={product.id} product={product} />
      ))}
    </table>
  );
}

export default ProductTable;
