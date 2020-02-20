import React from 'react';

const ProductRow = props => {
  const style = {
      color: "black"
  };
  // checkStock = item => {
  if (props.item.stocked === false) {
     style.color= "red"
  }

  return (
    <tr key={props.i}>
      <td style={style}>{props.item.name}</td>
      <td>{props.item.price}</td>
    </tr>
  );
};

export default ProductRow;
