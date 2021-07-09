import React from 'react';

const ProductRow = ({ product }) => {
  return (
    <tr style={!product.stocked ? { color: 'red' } : null}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
