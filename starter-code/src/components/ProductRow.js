import React, { Component } from 'react';


class ProductRow extends Component {

  render() {
    return (
      <tr className="ProductRow">
          <td>{this.props.product.name}</td>
          <td>{this.props.product.stocked ? "Yes" : "No"}</td>
          <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;