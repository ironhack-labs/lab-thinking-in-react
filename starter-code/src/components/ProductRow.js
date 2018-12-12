import React from "react";

const ProductRow = ({ name, price, stocked }) => {
  return (
    <tr>
      {stocked ? <td>{name}</td> : <td className="rojo">{name}</td>}
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
