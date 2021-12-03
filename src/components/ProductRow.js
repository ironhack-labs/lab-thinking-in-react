import React from 'react';

const ProductRow = (props) => {
  return (
    <tr key={props.product.id}>
      {props.product.stocked === true ? (
        <td>{props.product.name}</td>
      ) : (
        <td className="out-of-stock">{props.product.name}</td>
      )}
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
