import React from 'react';

function ProductRow({ product }) {
  return (
    <tbody>
      <tr>        
        <td className={!product.inStock ? "text-danger" : 'text-black'}>{product.name}</td>
        <td>{product.price}</td>        
      </tr>
    </tbody>
  );
}

export default ProductRow;
