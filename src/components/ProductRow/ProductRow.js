import React from 'react';
import './ProductRow.css';

const ProductRow = ({ name, price, stocked }) => {  
  return (
    <tr>
      <td className={stocked ? 'in-stock' : 'out-of-stock'}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
