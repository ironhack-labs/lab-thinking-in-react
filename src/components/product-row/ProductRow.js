import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
  render() {
    // const textStyle = {
    //   color: this.props.product.stocked === 'false' ? 'red' : 'black',
    // };

    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
