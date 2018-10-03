import React from "react";

const ProductRow = prop => {
  if (prop.stocked) {
    return (
      <tr>
        <td>{prop.name}</td>
        <td>{prop.price}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td style={{ color: "red" }}>{prop.name}</td>
        <td>{prop.price}</td>
      </tr>
    );
  }
};

export default ProductRow;
