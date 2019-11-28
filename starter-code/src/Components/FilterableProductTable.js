import Search from './Search';
import ProductTable from './ProductTable';
import data from '../data';
import React, { Component } from 'react';

export default class FilterableProductTable extends Component {
  state = {
    query: '',
    productList: [...data],
    checkBox: true
  };

  setQuery = query => {
    this.setState({
      query: query
    });
  };

  setCheckBox = checkedness => {
    this.setState({
      checkBox: checkedness
    });
  };
  render() {
    return (
      <div>
        <h1>Ironstore</h1>
        <Search
          query={this.state.query}
          setQuery={this.setQuery}
          setCheckBox={this.setCheckBox}
        />
        <ProductTable
          query={this.state.query}
          checkBox={this.state.checkBox}
          products={this.state.productList}
        />
      </div>
    );
  }
}
