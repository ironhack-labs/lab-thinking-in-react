import React, { Component } from 'react'

export class ProductRow extends Component {
  render() {
    // console.log(this.props);
    if (this.props.stocked) {
      return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td style={{color: "red"}}>{this.props.name}</td>
          <td>{this.props.price}</td>
        </tr>
      )
    }
  }
}

export default ProductRow
