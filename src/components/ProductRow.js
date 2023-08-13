import React from 'react';

const ProductRow = ({ product }) => {
  const textColor = product.inStock ? 'black' : 'red';

  return (
    <tr>
      <td style={{ color: textColor }}>{product.name}</td>
      <td style={{ color: textColor }}>{product.category}</td>
      <td style={{ color: textColor }}>{product.price}</td>
      <td style={{ color: textColor }}>{product.inStock ? 'Yes' : 'No'}</td>
    </tr>
  );
};

export default ProductRow;
