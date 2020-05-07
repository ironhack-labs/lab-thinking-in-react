import React, { Component } from 'react';
import ProductTable from './ProductTable';
import data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    products: data.data,
    query: '',
  };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          query={this.state.query}
          searchProducts={this.setQuery}
        ></SearchBar>
        <ProductTable products={this.state.products} query={this.state.query} />
      </div>
    );
  }
}

export default FilterableProductTable;
