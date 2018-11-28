import React from 'react';

const product = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  )
}

export default product;