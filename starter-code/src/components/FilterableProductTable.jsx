import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../App.css';

export default class FilterableProductTable extends Component {
  state = { search: '', stocked: false };

  changeState = (obj) => {
    const { id, value } = obj;
    this.setState({ [id]: value });
  }

  render() {
    const { products } = this.props;
    return (
      <div className='filterable-product-table'>
        <SearchBar changeState={this.changeState} />
        <ProductTable products={products} state={this.state} />
      </div>
    );
  }
}
