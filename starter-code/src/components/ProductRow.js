import React from 'react';

const ProductRow = ({ name, price, stocked }) => (
  <tr>
    <td className="has-text-centered">{name}</td>
    <td className="has-text-centered">
      <span style={{ color: !stocked ? 'tomato' : 'inherit' }}>{price}</span>
    </td>
  </tr>
);

export default ProductRow;
