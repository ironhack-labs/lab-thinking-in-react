import React from 'react';


const ProductRow = (props) => {
  return (
    <tr key={props.idx}>
      {props.stocked ? <td className="stock">{props.name}</td> : <td className="outOfStock">{props.name}</td>}
      <td>{props.price}</td>
    </tr>
  )
}

export default ProductRow