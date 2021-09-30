import React from 'react';

const ProductRow = (props) => {
  return (
    <div className="product-row-wrapper">
      <div className="product-name">
        <h4>{props.product.name}</h4>
      </div>
      <div className="product-price">
        <h4>{props.product.price}</h4>
      </div>
      <div className="product-price">
        <h4>{props.product.stocked && 'In Stock'}</h4>
        <h4>{props.product.stocked === false && 'not in stock'}</h4>
      </div>
    </div>
  );
};

export default ProductRow;
