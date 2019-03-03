import React from "react";

const ProductRow = ({ item }) => {
  return (
    <tr>
      <td className={item.stocked ? "" : "text-danger"}>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
};

export default ProductRow;
