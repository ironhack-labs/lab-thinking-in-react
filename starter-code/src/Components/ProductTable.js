import React, { Component, Fragment } from 'react';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <Fragment>
        <ul className="data">
          <h3>Name</h3>
          <h3>Price</h3>
        </ul>
        <ProductRow
          product={this.props.product}
          search={this.props.search}
          checked={this.props.checked}
        />
      </Fragment>
    );
  }
}
