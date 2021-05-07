import React from 'react';

export default function ProductRow(props) {
  const data = props.data;
  const name = data.stocked ? (
    <span style={{ color: 'black' }}>{data.name}</span>
  ) : (
    <span style={{ color: 'red' }}>{data.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{data.price}</td>
    </tr>
  );
}
