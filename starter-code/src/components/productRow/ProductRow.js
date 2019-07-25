import React, { Component } from 'react';
import './productRow.css';

class ProductRow extends Component {
  render() {
    return (
      <div className={`d-flex ${!this.props.inStock && "red"} ${this.props.isCategory && "category"}`}>
        <span>{this.props.name}</span>
       {!this.props.isCategory && <span>{this.props.price}</span>}
      </div>
    );
  }
}

export default ProductRow;