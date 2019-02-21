import React from 'react';

export default function ProductRow(props) {
  return (
    <div class="productrow">
      <p><span>{props.product.name}</span><span>{props.product.price}</span></p>
    </div>
  )
}