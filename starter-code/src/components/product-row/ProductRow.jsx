import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    // console.log("render", this.props.productName)
    return (
      <tr>
        <td>{this.props.productName}</td>
        <td>{this.props.productPrice}</td>
      </tr>
    )
  }
}
