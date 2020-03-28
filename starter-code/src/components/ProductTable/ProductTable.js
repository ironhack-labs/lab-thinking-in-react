import React from 'react';
import './ProductTable.css';
import ProductRow from './ProductRow/ProductRow';

const ProductTable = ({ products, search, checked }) => {
  const filteredProducts = products.filter(product => {
    if (checked) {
      return (
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        product.stocked === true
      );
    }

    return (
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, id) => {
            return <ProductRow key={id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
