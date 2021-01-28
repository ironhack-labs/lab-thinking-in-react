import React from 'react';

function ProductRow(props) {
  return (
    <tr>
      <td style={props.stocked ? {color: 'black'} : {color: 'red'}}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
