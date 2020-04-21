import React from 'react';
import "./ProductRow.css"

const ProductRow = (props) => {
  return (
  <div className="prodRow">
  <div>{props.product}</div>
  <div>{props.price}</div>
  </div>);
};

export default ProductRow;
