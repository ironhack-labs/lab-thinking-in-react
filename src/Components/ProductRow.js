import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class ProductRow extends Component {
  render() {
    //SETUP

    //DISPLAY
    return (
      <React.Fragment>
        <tr style={{ color: this.props.product.stocked ? 'inherit' : 'grey' }}>
          <td  >{this.props.product.name}</td>
          <td >{this.props.product.category}</td>
          <td className="price" >{this.props.product.price}</td>
          <td className="bold" style={{ color: this.props.product.stocked ? 'rgb(69, 192, 69)' : 'grey' }}>
            {this.props.product.stocked ? 'Buy now' : 'out of stock'}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default ProductRow;
