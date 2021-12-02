import React from 'react';

const ProductRow = (props) => {
  const { name, price, stocked } = props.product;
  const style = {color:stocked ? "black" : "red"} 
  return (
    <tr>
      <td style={style}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
