import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const { name, price, stocked } = this.props.product;
    return (
      <tr key={this.props.index}>
        <td style={{color: stocked ? "black" : "red"}}>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}

export default ProductRow;
