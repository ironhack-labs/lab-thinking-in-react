import React from "react";

function ProductRow({ product }) {
  const textColor = product.inStock ? "white" : "red";

  return (
    <tr style={{ color: textColor }}>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>{product.inStock ? "Yes" : "No"}</td>
    </tr>
  );
}

export default ProductRow;
