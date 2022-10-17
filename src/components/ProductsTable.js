import React from 'react';
import ProductRow from './ProductRow';

const ProductsTable = (props) => {
  const { products } = props;
  return (
    <table>
      <thead>
        <tr className="grey">
          <th>
            <strong>Name</strong>
          </th>
          <th>
            <strong>Price</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <ProductRow key={product.id} product={product} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;