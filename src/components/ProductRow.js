import React from 'react';

const ProductRow = (props) => {
  return (
    <tr key={props.product.name}>
      <td style={props.product.stocked ? { color: 'black' } : { color: 'red' }}>
        {props.product.name}
      </td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
