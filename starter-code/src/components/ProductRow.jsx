import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    const color = (this.props.stocked) ? 'black' : 'red'
    return (
      <tr>
        <td style={{color: color}}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    )
  }
}
