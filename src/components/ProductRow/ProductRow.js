import React from 'react';

import './style.css';

const ProductRow = ({ product }) => {
  const { name, price, stocked } = product;

  return (
    <tr>
      <td className={!stocked && 'out-of-stock'}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
