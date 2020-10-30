/*
 * Product Table.
 */

import React from "react";
import ProductRow from "./ProductRow";
import "./ProductTable.css";

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>

      {/* <tbody> */}
      <ProductRow products={props.products} />
    </table>
  );
}

export default ProductTable;
