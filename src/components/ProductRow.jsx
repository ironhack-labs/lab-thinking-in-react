import React from 'react';

const ProductRow = ({ product: { name, price } }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
