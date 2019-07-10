import React from "react";

function ProductRow(props) {
  return (
    <tr className="contact">
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
