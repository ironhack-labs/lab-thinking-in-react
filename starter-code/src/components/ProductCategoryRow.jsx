import React, { Component } from "react";

export default class ProductCategoryRow extends Component {
  render() {
    //A este componente solo le pasamos las categorias como props
    const category = this.props.category;

    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}
