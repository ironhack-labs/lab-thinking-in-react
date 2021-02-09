import React from 'react';

export default function ProductRow(props) {
  let status = props.product.stocked === false ? 'table-danger' : '';

  return (
    <tr className={status}>
      <th>{props.product.name}</th>
      <td>{props.product.category}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}
