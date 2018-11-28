import React from 'react';
import './Product.css';

const product = (props) => {
  return (
    <tr>
      <td className={!props.stocked ? 'not-stocked' : undefined}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  )
}

export default product;