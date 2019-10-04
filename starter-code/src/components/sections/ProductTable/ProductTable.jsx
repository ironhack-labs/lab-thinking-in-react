import React, { Component } from 'react'
import ProductRow from './ProductRow/ProductRow';
import './ProductTable.css'

export default class ProductTable extends Component {

  render() {
    debugger;
    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product) => <tr><ProductRow {...product}/></tr>)}
        </tbody>
      </table>
    )
  }
}
