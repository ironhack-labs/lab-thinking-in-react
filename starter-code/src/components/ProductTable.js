import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div className="product-table">
        <h2>ProductTable</h2>
        <ProductRow />
      </div>
    )
  }
}
