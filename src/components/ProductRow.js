import React from 'react';

const ProductRow = (props) => {
  const { product } = props;
  const productName = product.inStock ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{productName}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;