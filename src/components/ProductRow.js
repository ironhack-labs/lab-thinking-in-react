import React from 'react';

function ProductRow(props) {
  let style;

  if (props.item.stocked) {
    style = {
      color: 'black',
    };
  } else {
    style = {
      color: 'red',
    };
  }

  return (
    <tr style={style}>
      <td>{props.item.name}</td>
      <td>{props.item.price}</td>
    </tr>
  );
}

export default ProductRow;
