import React, { Component } from "react";
export default class ProductRow extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.datos.name}</th>

        <th>{this.props.datos.price}</th>
      </tr>
    );
  }
}
