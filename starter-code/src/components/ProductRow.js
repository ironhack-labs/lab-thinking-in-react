import React, { Component } from 'react';

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.color = 'red';
  }

  render() {
    console.log(this.props.product.stocked)
    return (
      <tr>
      
        <td className={!this.props.product.stocked && this.color}>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
export default ProductRow;
