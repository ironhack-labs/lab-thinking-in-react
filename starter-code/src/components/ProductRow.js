import React from 'react';

const ProductRow = props => {
  const redStyle = {
    color: 'red'
  };
  return (
    <tr>
      {props.product.stocked ? (
        <td>{props.product.name}</td>
      ) : (
        <td style={redStyle}>{props.product.name}</td>
      )}
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
