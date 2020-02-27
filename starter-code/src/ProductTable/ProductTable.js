import React, { Component } from 'react';
import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends Component {

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
          {this.props.allProducts.map((product, idx) => {
            return (
              <ProductRow
                key={idx}
                name={product.name}
                price={product.price}
                stocked={product.stocked}
              ></ProductRow>
            );
          })}
        </tbody>
      </table>
    );
  }
}
