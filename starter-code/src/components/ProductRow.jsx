import React from 'react';

const ProductRow = props => {
  const product = props.product;
  return (
    <tr style={product.stocked ? {} : { color: 'red' }}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
