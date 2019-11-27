import React from 'react';

export default function ProductRow({ name, price, stocked }) {
  return (
    <tr className="product">
      <td className={`${stocked === false ? 'out-of-stock' : ''}`}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
