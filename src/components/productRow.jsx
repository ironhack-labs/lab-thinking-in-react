/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function ProductRow({ product }) {
  const { name, price, inStock } = product;
  const textColor = inStock ? "black" : "red";

  return (
    <tr>
      <td style={{ color: textColor }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;