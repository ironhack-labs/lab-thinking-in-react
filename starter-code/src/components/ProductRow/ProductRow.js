import React from 'react';
import './ProductRow.css';

const ProductRow = (props) => {
  const stockColor = () => {
    if(!props.stocked) {return "red"} else {return "rgb(17, 103, 160)"}
  }
  return (
    <div className="prodRow">
      <div style={{color: stockColor()}}>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default ProductRow;
