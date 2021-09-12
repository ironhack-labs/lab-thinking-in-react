import React from 'react';
import './ProductRow.css';

const ProductRow = ({ name, price }) => {
  return (
    <div className="product-row-container">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductRow;
