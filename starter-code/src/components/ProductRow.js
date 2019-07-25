import React, { Component } from "react";
import "../App.css";

class ProductRow extends Component {
  render() {
    // console.log(")))))))))))))))))  ", this.props);

    return (
      <div className="product-row">
        <span>{this.props.name}</span>
        <span>{this.props.price}</span>
      </div>
    );
  }
}

export default ProductRow;
