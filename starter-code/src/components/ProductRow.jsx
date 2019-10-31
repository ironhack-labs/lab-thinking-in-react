import React, { Component } from 'react';
import ProductData from './ProductData'

class ProductRow extends Component {
  render() {
    return (
      <tr style={{color: this.props.color}}>
        <ProductData productData={this.props.productName} />
        <ProductData productData={this.props.productPrice} />
      </tr>
    )
  }
}

export default ProductRow
