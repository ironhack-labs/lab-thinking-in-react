import React from 'react';

function ProductRow(props) {
    const { name, price, stocked } = props.product;
    const fontColor = {color:stocked ? "black" : "red"} 
    return (
      <tr>
        <td style={fontColor}>{name}</td>
        <td>{price}</td>
      </tr>
    );
  };
  export default ProductRow;