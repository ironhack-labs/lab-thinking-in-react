import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div className="row">
      <table className="table mt-5">
        <thead>
          <tr>
        <th>Name</th>
        <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {this.props.productsFromFilterableProductTable.data.map((product, index) => <ProductRow key={index} name={product.name} stocked={product.stocked} price={product.price} />)}
        <ProductRow />
        </tbody>
      </table>
      </div>
    )
  }
}
