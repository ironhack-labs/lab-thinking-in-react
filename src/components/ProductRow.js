import React from 'react';

function ProductRow(props) {
  return (
    <tr>
      <td>{props.eachProduct.name}</td>
      <td>{props.eachProduct.price}</td>
    </tr>
  );
}

export default ProductRow;
