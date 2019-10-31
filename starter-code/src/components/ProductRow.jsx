import React, { Component } from 'react';
import data from '../data.json';

class ProductRow extends Component {
  constructor() {
    super();
    this.state = {
      products: data
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.products.map((data, idx) => {
            return <ProductTable key={idx} {...data} />;
          })}
        </ul>
      </div>
    );
  }
}
export default ProductRow;
