import React, { Component } from 'react';
import ProductRow from '/Users/lwrocks/Documents/Ironhack/Labs/w7d4/lab-thinking-in-react/starter-code/src/components/ProductRow.js';

class FilterableProductTable extends Component {
  render() {
    const ProductDetail = this.props.products
      .filter(product => {
        return product.name.toLowerCase().includes(this.props.search);
      })
      .map(product => {
        return <ProductRow product={product} />;
      });
    return <div>{ProductDetail}</div>;
  }
}

export default FilterableProductTable;
