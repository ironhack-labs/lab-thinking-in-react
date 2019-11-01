import React, { Component } from 'react';

const ProductRow = props => {
  const { name, stocked, price } = props.allProps;
  return (
    <tr>
      {stocked ? <td>{name}</td> : <td style={{ color: 'red' }}>{name}</td>}
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
