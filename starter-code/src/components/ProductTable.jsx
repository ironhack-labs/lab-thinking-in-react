import React, { Component } from 'react'
import ProductRow from './ProductRow';
import data from "../data.json"


export default class ProductTable extends Component {
  render() {
let eachProduct = this.props.products.data.map((product, index) => {
  return <ProductRow product={product} key={index}/>
})

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {eachProduct}
          </tbody>
        </table>
      </div>
    )
  }
}
