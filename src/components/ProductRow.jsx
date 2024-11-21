import React from "react";

function ProductRow({ product }) {
  return (
    <tr>
      <td className={product.inStock ? "" : "text-danger"}>
        {product.name}
      </td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.inStock ? "Yes" : "No"}</td>
    </tr>
  );
}

export default ProductRow;
