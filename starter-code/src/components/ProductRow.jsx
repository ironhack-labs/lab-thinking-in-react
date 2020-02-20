import React, { Component } from 'react';

export default class ProductRow extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    let dynamicClass = 'stocked';
    if (!this.props.product.stocked) {
      dynamicClass = 'not-stocked';
    }
    return (
      <tr className={dynamicClass}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}
