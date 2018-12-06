import React, { Component } from "react";
import ProductCategoryRow from "../FilterableProductTable/ProductTable/ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductTable/ProductRow/ProductRow";
import Data from "../../data.json";

const filterReduce = Data.data.reduce((acc, e) => {
  if (acc[e.category]) {
    acc[e.category].push(e);
  } else {
    acc[e.category] = [e];
  }
  return acc;
}, {});

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {Object.keys(filterReduce).map(category => {
            return (
              <div>
                <ProductCategoryRow category={category} />
                {Object.values(filterReduce[category]).map(e => {
                  return <ProductRow name={e.name} />;
                })}
              </div>
            );
          })}
        </table>
      </div>
    );
  }
}
