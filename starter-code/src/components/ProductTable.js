import React, { Component } from "react";
import "../App.css";
import ProductRow from "./ProductRow";

const ProductTable = props => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {props.data.map((item, index) => {
        return <ProductRow item={item} />;
      })}
    </table>
  );
};

export default ProductTable;
