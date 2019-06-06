import React, { Component } from 'react';
import data from '../data.json'
import ProductRow from './ProductRow.js';


class ProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.products = props.products
    this.printProps(props.products)
  }

  printProps(arg) {
    console.log(arg)
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
          {this.products.map((product, idx) => <ProductRow key={idx} {...product} />)}
          
            </tbody>
        </table>
    )
  }
}

export default ProductTable