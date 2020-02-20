import React from 'react';

const ProductRow = props => {
  if (!props.product.stocked) {
    return (
      <tr key={props.product.name}>
        <td style={{ color: 'red' }}> {props.product.name}</td>
        <td>{props.product.price}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td> {props.product.name}</td>
        <td>{props.product.price}</td>
      </tr>
    );
  }
};

export default ProductRow;
