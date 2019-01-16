import React, { Component } from "react";
import List from "./List";
class ProductCategoryRow extends Component {
  render() {
    return (
      <div>
        <h3>Sporting Goods</h3>
        <ul>
          {this.props.state.dataCopy
            .filter(e => e.name.includes(this.props.state.search))
            .map(
              (e, index) =>
                e.category === "Sporting Goods" &&
                (e.stocked === true ||
                  e.stocked === this.props.state.selected) && (
                  <List key={index} className={this.props.className}element={e} />
                )
            )}
        </ul>
        <h3>Electronics</h3>
        <ul>
          {this.props.state.dataCopy
            .filter(e => e.name.includes(this.props.state.search))
            .map(
              (e, index) =>
                e.category === "Electronics" &&
                (e.stocked === true ||
                  e.stocked === this.props.state.selected) && (
                  <List key={index} className={this.props.className} element={e} />
                )
            )}
        </ul>
      </div>
    );
  }
}
export default ProductCategoryRow;
