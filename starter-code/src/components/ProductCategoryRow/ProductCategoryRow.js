import React, { Component } from 'react';
import './ProductCategoryRow.css'

export default class ProductCategoryRow extends Component {
  render() {
    return (
      <tr className='category-row'>
          <td colSpan="2">{this.props.category}</td>
      </tr>
    )
  }
}
