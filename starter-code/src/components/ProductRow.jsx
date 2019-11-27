import React from 'react';

export default function ProductRow({ name, price }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    </>
  );
}
