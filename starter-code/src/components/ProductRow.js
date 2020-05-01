import React from 'react';

const ProductRow = ({ name, price }) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
);

export default ProductRow;
