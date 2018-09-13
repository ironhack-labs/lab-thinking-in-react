import React from "react";

const ProductCategoryRow = ({ category }) => {
  // console.log(props);
  return (
    <tr>
      <td>
        <strong>{category}</strong>
      </td>
    </tr>
  );
};

export default ProductCategoryRow;
