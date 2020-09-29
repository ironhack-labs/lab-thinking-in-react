import React from 'react';

export default function ProductRow(props) {
  return (
    <div>
      <span>{props.product.name}</span>
      <span>{props.product.price}</span>
    </div>
  );
}
