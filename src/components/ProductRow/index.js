import React, { Component } from 'react';
import './styles.css';

export default class ProductRow extends Component {
  render() {
    const { product, index } = this.props;
    return (
      <div>
        <div key={index} className="line">
          <div
            className="item"
            style={{ color: product.stocked !== true ? 'red' : 'black' }}
          >
            {product.name}
          </div>
          <div className="item"> {product.price} </div>
        </div>
      </div>
    );
  }
}
