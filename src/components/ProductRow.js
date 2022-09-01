import React from 'react';

function ProductRow(props) {
  return (
    <tbody>
      <tr>
        <td style={{color: props.gridData.inStock ? 'black': 'red'}} >{props.gridData.name}</td>
        <td style={{color: props.gridData.inStock ? 'black': 'red'}} >{props.gridData.price}</td>
      </tr>
    </tbody>
  );
}

export default ProductRow;
