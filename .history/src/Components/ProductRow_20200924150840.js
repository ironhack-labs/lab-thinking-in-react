import React from 'react';

export default function ProductRow(props) {
  return (
    <tr key={props.idx}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}
