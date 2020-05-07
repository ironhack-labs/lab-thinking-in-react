import React from 'react';

export default function ProductRow(props) {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>{props.product.stocked}</td>
    </tr>
  );
}
