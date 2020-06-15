import React from 'react';

function ProductRow(props) {
  const { name, price, stocked } = props.eachProduct;
  let textColor;
  if (stocked) {
    textColor = 'black';
  } else {
    textColor = 'red';
  }
  return (
    <tr style={{ color: textColor }}>
      <td>{props.eachProduct.name}</td>
      <td>{props.eachProduct.price}</td>
    </tr>
  );
}

export default ProductRow;
