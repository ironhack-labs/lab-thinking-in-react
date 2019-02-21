import React, { Component } from "react";
import "./productRow.css";

export default class ProductRow extends Component {
  render() {
    return (
      <div className="productRow">
        <tr>
          <td className={this.props.product.stocked ? "conStock" : "sinStock"}>
            {this.props.product.name}
          </td>
          <td>{this.props.product.price}</td>
        </tr>
      </div>
    );
  }
}
