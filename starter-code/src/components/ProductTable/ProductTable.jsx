import React, { Component } from 'react'
import "./ProductTable.css"

export default class ProductTable extends Component {
  render() {
    return (
      <table className="striped z-depth-1 centered product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {this.props.children}
        </tbody>
      </table>
    )
  }
}
