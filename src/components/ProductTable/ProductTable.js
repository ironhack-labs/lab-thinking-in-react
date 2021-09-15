import React from 'react';
import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow';

const ProductTable = ({ products }) => {
  return (
    <div className="product-table-box">
      <table>
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
                name={product.name}
                price={product.price}
                stocked={product.stocked}
                key={product.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
