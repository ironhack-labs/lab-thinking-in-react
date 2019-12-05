import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    return (
      <React.Fragment>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </React.Fragment>
    );
  }
}
