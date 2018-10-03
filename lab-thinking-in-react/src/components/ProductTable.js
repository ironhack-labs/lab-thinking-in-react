import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import _ from "lodash";

const ProductTable = prop => {
  const newData = _.groupBy(prop.data, e => e.category);
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>

      {Object.keys(newData).map(e => {
        return (
          <ProductCategoryRow key={e.name} category={e} data={newData[e]} />
        );
      })}
    </table>
  );
};

export default ProductTable;
