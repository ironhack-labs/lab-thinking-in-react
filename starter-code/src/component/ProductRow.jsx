import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
      <tr style={{color: this.props.stocked? "green" : "red"}}>
        <td>
          {this.props.name}
        </td>
        <td>
          {this.props.price}
        </td>
      </tr>
    )
  }
}
