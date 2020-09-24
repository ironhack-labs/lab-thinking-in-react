import React from 'react';

export default function ProductRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}
