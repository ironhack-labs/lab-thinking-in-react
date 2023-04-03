import React from 'react';

function ProductRow({ product }) {
  return (
    <tr>
      <td className={product.inStock ? '' : 'text-danger'}>{product.name}</td>
      <td className={product.inStock ? '' : 'table-danger'}>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
