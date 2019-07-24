import React from "react";

function ProductRow(props) {
  return (
    <div className="grid">
      <span>{props.name}</span>
      <span>{props.price}</span>
    </div>
  );
}

export default ProductRow;
