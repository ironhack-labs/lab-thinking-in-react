import React, { Component } from "react";

class Product extends Component {
  render() {
    const { category, price, stocked, name } = this.props.info;
    return (
      <div>
        <table>
          <tr class="productName">{name}</tr>
          <tr>{category}</tr>
          <tr>{price}</tr>
          <tr>{stocked}</tr>
        </table>
      </div>
    );
  }
}
export default Product;