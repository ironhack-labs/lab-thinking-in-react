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
                return (
                  oneArticle.name
                    .toLowerCase()
                    .includes(this.props.search.toLowerCase()) &&
                  (oneArticle.stocked || !this.props.stockItem)
                );
              })
              .map(oneArticle => {
                return <ProductRow {...oneArticle} key={oneArticle.name} />;
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
