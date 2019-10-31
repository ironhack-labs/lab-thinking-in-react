import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {
  render() {
    console.log(this.props.displayProducts)
    return (
      <table className="table is-bordered is-fullwidth productTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.displayProducts.map((p, i) => <ProductRow productName={p.name} productPrice={p.price} color={p.stocked ? 'black' : 'red'} key={i} />)}
        </tbody>
      </table>
    )
  }
}

export default ProductTable
