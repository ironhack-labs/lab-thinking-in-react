import React from 'react';

const ProductRow = props => {
  return (
    <tr>
      <td className={props.stocked ? ' ' : 'Red'}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
