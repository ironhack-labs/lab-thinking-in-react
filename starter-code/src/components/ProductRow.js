import React from "react";

const ProductRow = ({ name, price, stocked, id }) => {
  return (
    <tr key={`prod-${id}`} className={stocked ? "" : "uk-text-danger"}>
      <td>{name}</td>
      <td>{price}</td>
      <td />
    </tr>
  );
};

export default ProductRow;
