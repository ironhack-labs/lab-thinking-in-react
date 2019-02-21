import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <p>Name Price</p>
        {this.props.productsFromFilterableProductTable.data.map((product, index) => <ProductRow key={index} name={product.name} stocked={product.stocked} price={product.price} />)}
        <ProductRow />
      </div>
    )
  }
}
