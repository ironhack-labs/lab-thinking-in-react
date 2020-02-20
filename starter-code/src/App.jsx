import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  state = {
    products: data.data,
    searchText: '',
    inStock: false
  };

  updateSearchText = text => {
    this.setState({
      searchText: text
    });
  };

  handleCheckboxChange = checked => {
    this.setState({
      inStock: checked
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
          inStock={this.state.inStock}
          handleCheckboxChange={this.handleCheckboxChange}
        />
      </div>
    );
  }
}
