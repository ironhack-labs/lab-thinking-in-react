import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import dataArray from './data.json';
import FilterableProductTable from './Component/FilterableProductTable';

export default class App extends Component {
  state = {
    searchInput: '',
    inStock : false
  };

  retrieveDataInput = e => {
    this.setState({ searchInput: e.target.value }, () => {
    });
  };
  inStockOrNot = e => {
    this.setState({ inStock: !this.state.inStock}, () => {
    });
  };
  handleFormSubmit = e => {
    e.persist()
    if (e.target.name === 'search') this.retrieveDataInput(e);
    if (e.target.name === 'checkbox') this.inStockOrNot(e);
  }
  render() {
    return (
      <div className="App">
        <FilterableProductTable
          products={dataArray.data}
          inputHandler={this.handleFormSubmit}
          searchInput={this.state.searchInput}
          inStock={this.state.inStock}
        />
      </div>
    );
  }
}
