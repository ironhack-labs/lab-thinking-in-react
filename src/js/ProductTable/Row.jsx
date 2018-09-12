import React from "react";

const Row = ({product}) => {
  return (
    <tr>
      <td className={product.stocked ? "" : "outOfStock"}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default Row;
