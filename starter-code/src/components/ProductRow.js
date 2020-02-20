import React from 'react';

const ProductRow = props => {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>{props.product.stocked}</td>
    </tr>
  );
};

export default ProductRow;
