import React from "react";

const ProductRow = props => {
  return (
    <tr>
      <td className={"stocked-" + props.item.stocked}>{props.item.name}</td>
      <td>{props.item.price}</td>
    </tr>
  );
};

export default ProductRow;
