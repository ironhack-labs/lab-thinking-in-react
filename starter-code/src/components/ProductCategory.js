import React, { Component } from 'react'

class ProductCategory extends Component {
  render() {


    return <tbody><th>{this.props.cat}</th></tbody>
  }
}

export default ProductCategory