import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  constructor(props) {
    super();

    // console.log(props.products)
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product => 
            <ProductRow {...product}></ProductRow>
          )}

        </tbody>
      </table>
    )
  }
}
