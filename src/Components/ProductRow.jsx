import React from "react";

function ProductRow({ product }) {
  const textColor = product.inStock ? "black" : "red"; // Texto rojo si no está en stock

  return (
    <tr>
      <td style={{ color: textColor }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
