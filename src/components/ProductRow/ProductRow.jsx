import React from "react";

const ProductRow = (props) => {
  let style ={}
  if (props.stocked === false){
    style = {color:'red'}
  }
  return (
    <tr>
            <td style ={style}>{props.name}</td>
            <td>{props.price}</td>
   </tr>
  );
};

export default ProductRow;
