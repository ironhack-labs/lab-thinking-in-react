import React from 'react';

export default props => (
  <tr className={(!props.product.stocked && 'text-danger') || 'text-info'}>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
  </tr>
);
