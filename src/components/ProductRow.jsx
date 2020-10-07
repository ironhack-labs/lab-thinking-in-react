import React from 'react';

const ProductRow = (price, stocked, name) => {
  return (
    <tr>
      <td className={stocked}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
