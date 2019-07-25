import React from 'react';

const ProductRow = (props) => {
  return (
    <tr>
      {!props.stocked ?
      <td className="not-in-stock">{props.name}</td> :
      <td>{props.name}</td>
      }
      <td>{props.price}</td>
    </tr>
  )
}

export default ProductRow;
