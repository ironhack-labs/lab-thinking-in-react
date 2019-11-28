import React from 'react';

const ProductRow = props => {
  return (
    <tr>
      <td style={{ color: !props.product.stocked && '#ff0000' }}>
        {props.product.name}
      </td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
