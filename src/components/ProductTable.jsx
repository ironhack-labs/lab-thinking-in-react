import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((element) => {
            return <ProductRow element={element} key={element.name} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
