import ProductRow from './ProductRow';
import React from 'react';

const ProductTable = (props) => {
  console.log(props);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.data.map((product) => (
          <ProductRow name={product.name} price={product.price} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
