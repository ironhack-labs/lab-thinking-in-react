import React from 'react';

export default function ProductRow(props) {
  let list = props.productRows.filter((product) =>
    product.name.toLowerCase().includes(props.secQuery.toLowerCase())
  );
  if (props.inStockProp) {
    list = list.filter((product) => product.inStock === true);
  }
  const filteredList = list.map((product) => {
    return (
      <tr key={product.id}>
        <td style={{ color: product.inStock || 'red' }}>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
      </tr>
    );
  });
  return <>{filteredList}</>;
}
