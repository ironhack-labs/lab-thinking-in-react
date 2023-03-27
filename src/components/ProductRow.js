import React from 'react';

function ProductRow({ category, price, inStock, name, id }) {
  return (
    <tr>
      <td style={{color: `${inStock ? 'unset' : 'red'}`}}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
