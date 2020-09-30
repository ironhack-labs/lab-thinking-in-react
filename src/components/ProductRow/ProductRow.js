import React from 'react';

const ProductRow = (props) => {
  // console.log(props);

  return (
    <div className="prod-row">
      <tr>
        <td> {props.product.name} </td>
        <td> {props.product.price} </td>
      </tr>
    </div>
  );
};

export default ProductRow;
