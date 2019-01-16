import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
class ProductTable extends Component {
  render() {
    return (
      <div>
        <div>
            <div className={this.props.className}><h2>Name</h2></div>
          
            <div className={this.props.className}><h2>Price</h2></div>
        </div>

        <ProductCategoryRow className={this.props.className} state={this.props.state} />
      </div>
    );
  }
}
export default ProductTable;
