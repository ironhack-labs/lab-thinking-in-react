import React from 'react';
import './ProductRow.css'

const ProductRow = (props) => {
  const {stocked, name, price} = props.data;
  if (stocked) {
    return (
      <tr className="row">
        <td className="cell">
          {name}
        </td>
        <td className="cell">
          {price}
        </td>
      </tr>
    )
  } else {
    return (
      <tr className="row">
        <td className="cell not-stocked">
          {name}
        </td>
        <td className="cell">
          {price}
        </td>
      </tr>
    )
  }
}

export default ProductRow;