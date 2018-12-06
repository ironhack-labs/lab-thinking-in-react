import React, { Component } from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow.js";
import articles from "../../data.json";
import ProductRow from "../ProductRow/ProductRow.js";

export default class ProductTable extends Component {
  render() {
    const filterReduce = {};

    articles.data.forEach(e => {
      if (filterReduce[e.category]) {
        filterReduce[e.category].push(e);
      } else {
        filterReduce[e.category] = [e];
      }
    });
    return (
      <div>
        <table>
          <tr>
            <th>Name </th>
            <th>Price </th>
          </tr>
            {Object.keys(filterReduce).map(key => {
              return (
                <React.Fragment>
                  <ProductCategoryRow {...filterReduce}>{key}</ProductCategoryRow>
                  {filterReduce[key].map(article => <ProductRow name={article.name} price={article.price}></ProductRow>)}
                </React.Fragment>
              );
            })}
        </table>
      </div>
    );
  }
}
