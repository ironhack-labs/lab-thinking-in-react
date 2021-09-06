import React from 'react';

export default function ProductRow({ name, price, stocked }) {
  function color() {
    return stocked === false ? 'red' : 'black';
  }

  return (
    <tr className="ProductRow">
      <td style={{ color: color() }}>
        {name}
        {stocked}
      </td>
      <td>{price}</td>
    </tr>
  );
}
