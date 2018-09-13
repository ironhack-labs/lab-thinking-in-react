import React from "react";

const ProductRow = ({ product }) => {
  return (
    // <tr className="{product.stocked ? 'out-of-stock' : 'stocked'}">
    <tr
      className={product.stocked ? "product stocked" : "product out-of-stock"}
    >
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
