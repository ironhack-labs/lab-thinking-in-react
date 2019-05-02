import React, { Component } from "react";

export default class ProductRow extends Component {
  render() {
    return (
        <tr>
          <td style={{ color: this.props.stocked ? "black" : "red"}}>{this.props.name}</td>
          <td>{this.props.price}</td>
        </tr>
    );
  }
}
