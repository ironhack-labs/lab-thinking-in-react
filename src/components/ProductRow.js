import React from 'react';

export default function ProductRow(props) {
  return (
    <div>
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      </tr>
    
    </div>


  );
}