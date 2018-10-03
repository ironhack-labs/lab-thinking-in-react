import React, { Component } from "react";
import data from "../data.json";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["Sporting Goods", "Electronics"]
    };
  }

  
  render() {
    console.log(this.props.data);
    const category = this.state.categories;
    return (
      <table>
        <thead>
          <ProductCategoryRow name={category[0]} />
        </thead>
        <tbody>
          {this.props.data.map(
            elem =>
              elem.category === category[0] ? (
                <ProductRow
                  key={elem.name}
                  name={elem.name}
                  price={elem.price}
                  stock={elem.stocked}
                />
              ) : (
                undefined
              )
          )}
        </tbody>

        <thead>
          <ProductCategoryRow name={this.state.categories[1]} />
        </thead>
        <tbody>
          {this.props.data.map(
            elem =>
              elem.category === category[1] ? (
                <ProductRow
                  key={elem.name}
                  name={elem.name}
                  price={elem.price}
                  stock={elem.stocked}
                />
              ) : (
                undefined
              )
          )}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
