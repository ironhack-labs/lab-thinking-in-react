import React, { Component } from 'react';

export default class ProductRow extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.product.name;
    this.price = this.props.product.price;

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <tr>
        <td>{this.name}</td>
        <td>{this.price}</td>
      </tr>
    );
  }
}
