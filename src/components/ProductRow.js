import React from 'react';

const ProductRow = (props) => {
  const { product } = props;
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
