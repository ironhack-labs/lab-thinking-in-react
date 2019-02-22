import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <p>Name Price</p>
        {this.props.products.map((product) => {
        console.log(product);
        return (<ProductRow prod = {product} />)
      })}
      </div>
    );
  }
}

export default ProductTable;
