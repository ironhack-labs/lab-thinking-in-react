import React from 'react';

export default function Product({ name, price, stocked }) {
  function isChecked() {
    if (stocked) return { color: 'black' };
    else return { color: 'red' };
  }
  return (
    <tr>
      <td style={isChecked()}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
