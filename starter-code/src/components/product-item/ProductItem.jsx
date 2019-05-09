import React from 'react';

const ProductItem = (props) => {
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  )
}

export default ProductItem;
