import React from 'react';

const ProductRow = ({ name, price, stocked }) => {
  const style = !stocked ? { color: 'red' } : { color: 'black' };

  return (
    <tr>
      <td style={style}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
