import React from 'react';

const ProductRow = (props) => {
  return (
    <tr className="productrow">
      <td
        style={!props.products.stocked ? { color: 'red' } : { color: 'black' }}
      >
        {props.products.name}
      </td>
      <td> {props.products.price} </td>
    </tr>
  );
};

export default ProductRow;
