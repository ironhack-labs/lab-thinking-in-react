import React from 'react';
import './ProductRow.css'

export default function ProductRow(props) {
  return (
    <div className="product" style={props.product.stocked ? { color: 'black' } : { color: 'red' }}>
      <span>{props.product.name}</span>
      <span>{props.product.price}</span>
    </div>
  );
}
