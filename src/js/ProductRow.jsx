import React from "react";

const ProductRow = props => {
  return (
    <tr className="row">
      <td className={"col stocked-" + props.item.stocked}>{props.item.name}</td>
      <td className="col">{props.item.price}</td>
    </tr>
  );
};

export default ProductRow;
