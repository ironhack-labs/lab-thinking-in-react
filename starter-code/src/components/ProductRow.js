import React from 'react';

const ProductRow = props => {
  return (
    <tr style={props.style}>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
