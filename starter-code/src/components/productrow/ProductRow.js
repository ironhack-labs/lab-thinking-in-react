import React, { Component } from 'react';
import './productrow.css';

class ProductRow extends Component {

  render() {
    return (
      <div className={`product-row ${!this.props.inStock && 'red'}`}>
        <div className="container has-text-centered is-flex">
          <div className="container data-row is-size-6">{this.props.name}</div>
          <div className="container data-row is-size-6">{this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default ProductRow;