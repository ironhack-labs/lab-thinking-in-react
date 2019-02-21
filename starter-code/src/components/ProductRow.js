import React from "react";

export default function ProductTable({ product }) {
  return (
    <tr>
      <td className={product.stocked ? "" : "text-danger"}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
