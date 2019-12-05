import React from 'react';

const ProductCard = props => {
  return (
    <tr>
      <td><h3>{props.name}</h3></td>
      <td><h3>{props.price}</h3></td>
    </tr>
  );
};

export default ProductCard;
