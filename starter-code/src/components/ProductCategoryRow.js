import React from "react";

export const ProductCategoryRow = ({ rowCat }) => {
  return (
    <tr>
      <th colSpan="2">{rowCat}</th>
    </tr>
  );
};
