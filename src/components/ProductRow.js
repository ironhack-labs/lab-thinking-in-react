import React from 'react';

export default function ProductRow(props) {
  const divStyle = {
    color: props.product.stocked ? 'black' : 'red',
  };
  return (
    <tr className="ProductRow" style={divStyle}>
      <td>{props.product.category}</td>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}
