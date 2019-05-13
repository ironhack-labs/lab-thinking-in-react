import React from "react";

function ProductRow({ price, name }) {
  return (
    <React.Fragment>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    </React.Fragment>
  );
}

export default ProductRow;
