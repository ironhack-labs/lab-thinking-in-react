import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    return (
      <div>
        {this.props.products3000.map((product, idx) => (
          <ProductRow key={idx} allProps={product} />
        ))}
      </div>
    );
  }
}

export default ProductTable;
