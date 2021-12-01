import React from 'react';

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td className={product.stocked ? "" : "text-red" }>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
