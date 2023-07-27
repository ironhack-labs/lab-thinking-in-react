import React from 'react';

function ProductRow({product}) {
  return (
    <tr>
      <td className={product.inStock ? '' : 'out-of-stock'}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
