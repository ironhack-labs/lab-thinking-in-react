import React, { Component } from 'react';
import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        {this.props.filteredProducts.map((product) => {
          return <ProductRow product={product} key={product.id} />;
        })}
      </div>
    );
  }
}
