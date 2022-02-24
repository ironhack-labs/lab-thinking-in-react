import React from 'react';

export default function ProductRow(props) {
  const list = props.productRows.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });
  return <>{list}</>;
}
