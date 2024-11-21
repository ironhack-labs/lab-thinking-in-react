import React from "react";

function ProductRow({ product }) {
  const nameStyle = product.inStock ? {} : { color: "red" };

  return (
    <tr>
      <td style={nameStyle}>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.inStock ? "✔️" : "❌"}</td>
    </tr>
  );
}

export default ProductRow;

