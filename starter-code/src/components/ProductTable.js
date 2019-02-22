import React, { Component } from "react";
import "./ProductTable.css";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    // console.log(this.props.allProducts);
    return (
      <div className="ProductTable">
        PRODUCT TABLE
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>

          <ProductRow theProducts={this.props.allProducts} />
        </table>
      </div>
    );
  }
}

export default ProductTable;
