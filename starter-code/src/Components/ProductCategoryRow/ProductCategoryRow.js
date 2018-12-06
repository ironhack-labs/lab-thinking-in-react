import React, { Component } from 'react'

export default class ProductCategoryRow extends Component {
  render() {
    return (
      
      <tr colSpan="2"><strong>{this.props.category}</strong></tr>

    )
  }
}
