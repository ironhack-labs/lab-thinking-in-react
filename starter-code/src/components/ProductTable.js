import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>
          {props.data.map(product => {
            return <ProductRow product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
