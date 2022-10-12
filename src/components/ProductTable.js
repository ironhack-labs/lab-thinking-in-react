import './styles.css';
import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const { products } = props;
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <ProductRow
              key={product.id}
              inStock={product.inStock}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
