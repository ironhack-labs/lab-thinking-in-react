import React from 'react';
import './ProductRow.css';

const ProductRow = ({ name, price, stocked }) => {
  return (
    <tr className={stocked ? 'have-stock' : 'not-stock'}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
