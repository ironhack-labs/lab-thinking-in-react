import React, { Component } from 'react'

export default class ProductCategoryRow extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }



  render() {
    return (
      <tr>
        <td colspan="2">
          <b>{this.props.category}</b>
        </td>
      </tr>
    )
  }
}
