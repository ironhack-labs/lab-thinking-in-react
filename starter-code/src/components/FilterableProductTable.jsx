import React, { Component } from 'react';
import data from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

export default class FilterableProductTable extends Component {
  state = {
    query: '',
    productList: [...data],
    checkBox: true,
  }

  setQuery = query => {
    this.setState({
      query: query
    })
  }

  setCheckBox = checkedness => {
    this.setState({
      checkBox: checkedness
    });
  }

  render() {

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar query={this.state.query} setQuery={this.setQuery} setCheckBox={this.setCheckBox} />
        <ProductTable query={this.state.query} checkBox={this.state.checkBox} products={this.state.productList} />
      </div>
    )

  }

}