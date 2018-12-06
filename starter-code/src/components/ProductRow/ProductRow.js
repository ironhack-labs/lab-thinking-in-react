import React, { Component } from 'react'

export default class ProductRow extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }


  render() {
    return (
      <tr key={this.props.key}>
        <td style={this.props.product.stocked ? {color:"black"} : {color:"red"}}>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}
