import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr className="ProductRow">
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        {/* <td>{this.props.stockState}</td> */}
      </tr>
    );
  }
}

export default ProductRow;
