import React from 'react';

const ProductRow = ({ element }) => {
  const color = element.inStock ? 'black' : 'red';
  const style = { color: color };
  return (
    <tr>
      <td style={style}>{element.name}</td>
      <td>{element.price}</td>
    </tr>
  );
};

export default ProductRow;
