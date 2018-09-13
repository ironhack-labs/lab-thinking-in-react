import React from "react";

const ProductCategoryRow = ({ category }) => {
  // console.log(props);
  return (
    <tr className="category-header">
      <td>
        <strong>{category}</strong>
      </td>
    </tr>
  );
};

export default ProductCategoryRow;
