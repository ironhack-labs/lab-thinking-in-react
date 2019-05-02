import React, { Component } from "react";
import ProductRow from "./ProductRow";
import "./ProductTable.css";

export default class ProductTable extends Component {
  state = {
    product: this.props.product,
    stocked: false
  };
  render() {
      const productFilter=this.props.product.filter(product => product.stocked)
      console.log(productFilter)
    return (
      <div className="productTable">
        <ul>
          {productFilter.map((product, idx) => {
            return (
              <li key={idx}>
                <ProductRow name={product.name} />
                <ProductRow price={product.price} />
              </li>
            );
          })}
        </ul>

        <ProductRow product={this.props.product} />
      </div>
    );
  }
}
