import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    const { products } = this.props
    return (
      <table className="table is-striped is-fullwidth" style={{textAlignLast: 'center'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { products.map((prod, index) => <ProductRow key={index} p={prod} />) }
        </tbody>
      </table>
    )
  }
}
