import React from 'react';

export default function ProductRow(props) {
  return (
    <tr style={{ color: props.stocked ? 'black' : 'red' }}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}
