import React from 'react';

export default function ProductRow(props) {
  return (
    <div>
      {props.product.name}{props.product.price}
    </div>
  )
}