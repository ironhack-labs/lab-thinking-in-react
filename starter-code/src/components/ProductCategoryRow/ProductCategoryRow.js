import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'

export default class ProductCategoryRow extends Component {
  render() {
    return (
      <div>
        <th>{this.props.category}</th>
      </div>
    )
  }
}
