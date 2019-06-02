import React from 'react';

const ProductRow = ({data}) => (
  <tr className={!data.stocked ? "text-danger" : undefined}>
    <td>{data.name}</td>
    <td>{data.price}</td>
  </tr>

);

export default ProductRow