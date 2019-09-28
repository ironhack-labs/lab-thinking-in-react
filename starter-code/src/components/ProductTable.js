import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    // console.log(`Props from ProductTable (PT)`, this.props)
    return (
      <div className="product-table">
        <h2>ProductTable</h2>
        <ProductRow productsOnPT={ this.props }/>
      </div>
    )
  }
}
