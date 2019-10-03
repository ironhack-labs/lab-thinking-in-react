import React, { Component } from 'react';
import ProductRow from './ProductRow.js';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <div className="title-names">
          <h1>Name</h1>
          <h1>Price</h1>
        </div>
        {this.props.products.map((prod, idx) => (
          <ProductRow key={idx} {...prod}></ProductRow>
        ))}
      </div>
    );
  }
}
