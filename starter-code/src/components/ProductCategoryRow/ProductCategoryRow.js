import React, { Component } from 'react'
import articles from "../../data.json"


export default class ProductCategoryRow extends Component {
  render() {
    return (

      <tr>
          <th colSpan="2">{this.props.children}</th>
      </tr>
    )
  }
}
