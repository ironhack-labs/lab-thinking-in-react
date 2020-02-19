import React from 'react';

export default function ProductRow({ products }) {
  console.table(products.data);
  return (
    <>
      {products.map((p, i) => (
        <tr key={i}>
          <td>{p.name}</td>
          <td>{p.price}</td>
        </tr>
      ))}
    </>
  );
}
