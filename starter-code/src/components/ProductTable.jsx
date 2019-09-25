import React, { Component } from 'react';

import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    };
  }

  render() {
    // console.log(this.props.product.data);
    return (
      <div className="card container">
        <div className="card-body row">
          <div className="col">
            <h4>Name</h4>
          </div>
          <div className="col">
            <h4>Price</h4>
          </div>
        </div>
        <div className="card">
          {this.props.product.data.map(item => (
            <ProductRow productRow={item} />
          ))}
        </div>
      </div>
    );
  }
}
