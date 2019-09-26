import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    // console.log(this.props.product);
    return (
      <>
        <tr>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      </>
    );
  }
}

export default ProductRow;
