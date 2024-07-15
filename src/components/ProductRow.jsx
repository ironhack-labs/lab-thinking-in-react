import React from "react";

export default function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.inStock ? "Yes" : "No"}</td>
    </tr>
  );
}
