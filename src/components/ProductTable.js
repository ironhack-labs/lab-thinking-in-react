import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <div>
      <h2>ProductTable</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {props.products.map((product,i) => (
            <ProductRow product={product} key={i} />
        ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
