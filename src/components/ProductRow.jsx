import React from 'react';

function ProductRow({ product }) {
  return (
    <tr className='table-row'>
      <td className={`${product.inStock ? '' : 'text-red'}`}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
