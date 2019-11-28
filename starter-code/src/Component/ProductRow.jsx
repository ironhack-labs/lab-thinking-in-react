import React from 'react';
// import data from './src/data.json';

export default function ProductRow({ name, price }) {
  return (
    <>
      <tr className="productRow">
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    </>
  );
}
