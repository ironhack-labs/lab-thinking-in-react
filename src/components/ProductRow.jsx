import React from 'react';

export default function ProductRow(props) {
  const list = (
    <tr>
      <td> {props.product.name} </td>
      <td> {props.product.price} </td>
    </tr>
  );

  return <>{list}</>;
}
