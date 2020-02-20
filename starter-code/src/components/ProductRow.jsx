import React, { Component } from 'react';
// import data from '../data';

export default class Items extends Component {
  render() {
    if (this.props.product.stocked) {
      return (
        <tr key={this.props.product.name}>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    } else {
      return (
        <tr className="notStocked" key={this.props.product.name}>
          <td>{this.props.product.name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    }
  }
}
