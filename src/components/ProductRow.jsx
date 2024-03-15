import React from 'react';

function ProductRow({ product }) {
  if (product.inStock) {
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td className="soldOut">{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
