import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {

  render() {
    const { products } = this.props;

    return (
      <table className="uk-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>On Stock</th> 
          </tr>
        </thead>
        <tbody>
          { products.map( (product, index) => (
            <ProductRow key={index} {...product} />
          )) }
        </tbody>
      </table>
    );
  }
}