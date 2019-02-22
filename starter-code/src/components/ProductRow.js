import React, { Component } from 'react';

class ProductRow extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.prod.name} {this.props.prod.price}</p>
      </div>
    );
  }
}

export default ProductRow;
