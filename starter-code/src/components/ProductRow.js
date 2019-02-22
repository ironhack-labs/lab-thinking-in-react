import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
