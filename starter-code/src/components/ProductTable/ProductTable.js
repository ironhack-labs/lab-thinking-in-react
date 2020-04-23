import React from 'react';
import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow';

const ProductTable = (props) => {
  return (
    <div className="table">
      <div className="tableTitle">
        <h2>Name</h2>
        <h2>Price</h2>
      </div>
      {props.products.data.map((productObj) => (
        <ProductRow {...productObj} />
      ))}
    </div>
  );
};

export default ProductTable;
