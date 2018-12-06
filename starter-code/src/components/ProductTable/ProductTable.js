import React, { Component } from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow.js";
import ProductRow from "../ProductRow/ProductRow.js";

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name </th>
            <th>Price </th>
          </tr>
          <tr>
            <th colSpan="2">Sporting goods </th>
          </tr>

          <tr />

          <tr>
            <th colSpan="2">Electronics</th>
          </tr>

          <tr />
        </table>
        <ProductCategoryRow />
        <ProductRow />
      </div>
    );
  }
}
