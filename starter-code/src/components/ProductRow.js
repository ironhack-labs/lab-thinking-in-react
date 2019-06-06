import React, { Component } from 'react';
import data from '../data.json'


class ProductRow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log(props)
  }

  render() {
    return (
          <tr key={this.props}>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
          </tr>
    )
  }
}

export default ProductRow