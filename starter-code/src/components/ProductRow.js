import React, { Component } from 'react'

export default class ProductRow extends Component {
 
  render() {
    return (
      <tr>
        <td>{this.props.products.name}</td>
        <td>{this.props.products.price}</td>
      </tr>

    )
  }
}
