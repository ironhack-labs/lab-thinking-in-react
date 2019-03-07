import React, { Component } from 'react';
import '../App.css';


class ProductRow extends Component {
  render() {
    return (
      <tr className="ProductRow">
        <td>{this.props.productName.name}</td>
        <td>{this.props.productName.price}</td>
      </tr>
    );
  }
}

export default ProductRow;