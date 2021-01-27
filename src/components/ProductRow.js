import React from 'react';

export default function ProductRow(props) {
  const nameStyle = {
    color: props.product.stocked ? "inherit" : "red"
  }
  return (
      <tr>
        <td style={nameStyle}>{props.product.name}</td>
        <td>{props.product.price}</td>
      </tr>
  )
}
