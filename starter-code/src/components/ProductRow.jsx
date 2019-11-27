import React from 'react';

export default function ProductRow({ products }) {
  return (
    <div className="productRow">
      {products.map((p, i) => (
        <tr key={i}>
          <td style={{ color: p.stocked ? 'black' : 'red' }}>{p.name}</td>
          <td>{p.price}</td>
        </tr>
      ))}
    </div>
  );
}
