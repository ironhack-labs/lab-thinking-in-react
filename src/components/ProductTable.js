import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    
  render() {

    // console.log("from product table", this.props.products);

      return (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            <ProductRow 
              products = { this.props.products }
              query = { this.props.query }
            />
            </tbody>
          </table>
        </>
    )
  }
}