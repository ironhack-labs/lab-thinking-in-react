import React, { Component } from 'react'
import ProductRow from './ProductRow/ProductRow';

export default class ProductTable extends Component {


  constructor(props) {
    super();

    this.state = {
      products: props.products
    }
  }

  render() {
    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product) => <tr><ProductRow product={product}/></tr>)}
        </tbody>
      </table>
    )
  }
}
