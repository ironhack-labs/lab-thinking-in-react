import React from 'react';

const Products = ({ name, price, stocked }) => {
  let className = '';
  if (!stocked) {
    className += "nostock";
  }

  return (
    <tr>
      <td className={className}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default Products;