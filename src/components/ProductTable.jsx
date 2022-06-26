import React from 'react';
import ProductRow from './ProductRow';

import './ProductTable.css';

const ProductTable = ({ products }) => {
  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <ProductRow key={product.id} {...product} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
