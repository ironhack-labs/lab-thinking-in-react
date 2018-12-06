import React, { Component } from "react";

export default class ProductRow extends Component {
  render() {
    let myData = this.props.data;

    let myFilterData = myData.filter(
      product => product.category === this.props.category
    );
    if (this.props.state) {
      myFilterData = myFilterData.filter(product => product.stocked === true);
    }
    let products = myFilterData.map(prod => {
      if (!prod.stocked) {
        return (
          <tr>
            <td style={{ color: "red" }}>{prod.name}</td>
            <td>{prod.price}</td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td style={{ color: "black" }}>{prod.name}</td>
            <td>{prod.price}</td>
          </tr>
        );
      }
    });

    return (
      <tbody>
        <tr>
          <td>{products.length > 0 && this.props.category}</td>
        </tr>
        {products}
      </tbody>
    );
  }
}
