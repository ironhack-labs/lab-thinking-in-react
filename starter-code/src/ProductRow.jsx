import React from 'react';

const ProductRow = props => {
  return (
    <tr
      style={{
        color: !props.stocked ? 'red' : 'black'
      }}
    >
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
