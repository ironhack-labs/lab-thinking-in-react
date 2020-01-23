import React from 'react';

const ProductRow = (props) => {
  let className = 'has-text-centered';

  if (!props.product.stocked) {
    className += ' red';
  }

  return (
    <tr>
      <td className={className}>{props.product.name}</td>
      <td className="has-text-centered">{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
