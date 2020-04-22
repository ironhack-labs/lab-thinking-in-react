import React, { Component } from "react";
import ProductRow from "../ProductRow";
import "./styles.css";

export default class ProductTable extends Component {
  render() {
      const { products } = this.props;
    return (
        <div className="productTable">
            <ProductRow products={products} />
        </div>
    );
  }
}
