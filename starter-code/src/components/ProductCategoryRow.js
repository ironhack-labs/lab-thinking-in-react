import React from "react";

const ProductCategoryRow = ({ category }) => {
  return (
    <table>
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    </table>
  );
};

export default ProductCategoryRow;
