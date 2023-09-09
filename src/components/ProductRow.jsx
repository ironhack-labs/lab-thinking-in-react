import React from 'react';

function ProductRow(props) {
  const { product } = props;

  const textColor = product.inStock ? 'black' : 'red';

  return (
    <tr>
      <td style={{ color: textColor }}>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
