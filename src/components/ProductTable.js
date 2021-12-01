import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const { products } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr key={index + Date.now()}>
              <ProductRow index={index} product={product} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
