import React from 'react';


const ProductRow = (props) => {
  const setColor = () => (!props.stocked) ? "text-danger" : null;
  
  return (
    <tr>
      <td className={setColor()}>{ props.name }</td>
      <td>{ props.price }</td>
    </tr>
  )
}

export default ProductRow;

