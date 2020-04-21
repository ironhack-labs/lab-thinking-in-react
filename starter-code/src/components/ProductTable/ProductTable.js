import React from 'react';
import "./ProductTable.css"
import ProductRow from '../ProductRow/ProductRow';

const ProductTable = (props) => {
  return (
    <div className="table">
      <div className="tableTitle">
        <h2>Name</h2>
        <h2>Price</h2>
      </div>
      <ProductRow product="sala" price="55"/>
    </div>
  );
};

export default ProductTable;
