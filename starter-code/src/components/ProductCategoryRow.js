import React from "react";

export const ProductCategoryRow = ({ rowCat }) => {
  return (
    <tr>
      <th colSpan="3">{rowCat}</th>
    </tr>
  );
};
