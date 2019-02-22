import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
