import ProductRow from './ProductRow';
import React from 'react';

const ProductTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product, index) => (
          <ProductRow key={index} name={product.name} price={product.price} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
