import React from 'react';

import './ProductTable.css';

import ProductRow from '../ProductRow/ProductRow';

import data from '../../data.json';

export default class ProductTable extends React.Component {
  state = {
    products: data.data,
  };

  filterProducts = () => {
    return this.state.products.map((product) => {
      return <ProductRow key={product.id} {...product} />;
    });
  };

  render() {
    return <div>{this.filterProducts()}</div>;
  }
}
