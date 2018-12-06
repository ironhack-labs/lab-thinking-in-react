import React, { Component } from 'react'
import articles from "../../data.json"

export default class ProductRow extends Component {

    
  render() {
    return (
      <tr style={this.props.style}>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
      </tr>
    )
  }
}
