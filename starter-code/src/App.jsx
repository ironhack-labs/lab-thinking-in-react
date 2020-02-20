import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  state = {
    products: data.data,
    searchText: ''
  };

  updateSearchText = text => {
    this.setState({
      searchText: text
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable
          products={this.state.products}
          updateSearchText={this.updateSearchText}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}
