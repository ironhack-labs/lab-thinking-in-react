import React from 'react';

const ProductRow = props => {
  return props.products.map(elm => (
    <tr>
      <td>{elm.name}</td>
      <td>{elm.price}</td>
    </tr>
  ));
};

export default ProductRow;
