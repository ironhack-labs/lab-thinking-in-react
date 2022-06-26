import React from 'react';
import './ProductRow.css';

const ProductRow = ({ name, price, inStock }) => {
  return (
    <div className="productRow">
      <span style={inStock ? { color: 'black' } : { color: 'red' }}>
        {name}
      </span>

      <span>{price}</span>
    </div>
  );
};

export default ProductRow;
