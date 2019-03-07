import React from 'react';

const Product = props => {
  return(
    <tr>
      <td className="cell">{props.name}</td>
      <td className="cellTwo">{props.price}</td>
    </tr>
  )
}

export default Product;