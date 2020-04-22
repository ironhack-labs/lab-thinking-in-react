import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../App.css';

export default class FilterableProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className='filterable-product-table'>
        <Header />
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
}
