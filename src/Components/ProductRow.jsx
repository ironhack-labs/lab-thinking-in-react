import React from 'react';

export function ProductRow({ index, product }) {
  return (
    <tr className="productRow" key={index}>
      <td style={{ color: product.stocked ? 'black' : 'red' }}>
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
