import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    return (
      <div className="ProductRow">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products
              .filter(oneArticle => {
                return new RegExp(this.props.searchString, "i").test(
                  oneArticle.name
                );
              })
              .map(oneArticle => {
                return (
                  // <ProductRow name={oneArticle.name} price={oneArticle.price} />
                  <ProductRow {...oneArticle} key={oneArticle.name} />
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
