import React from 'react';

export default function ProductRow({ name, price, onStock }) {
  return (
    <tr className={onStock ? 'onstock' : 'outstock'}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
