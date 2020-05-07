import React, { Component } from 'react';
import './App.css';
import data from '../data.json';
import FilterableProductTable from './productsTable/FilterableProductTable';
import SearchBar from './searchbar/SearchBar';

export default class App extends Component {
  constructor() {
    super();
    this.dataCopy = [...data.data];
    this.state = {
      inStock: false,
      filteredData: this.dataCopy,
      data: this.dataCopy,
    };
  }
  filteredSearch = (searchString) => {
    const filteredResults = this.state.data.filter((elm) =>
      elm.name.toLowerCase().includes(searchString.toLowerCase())
    );
    this.setState({ filteredData: filteredResults });
  };
  filteredCheck = (checkValue) => {
    const filteredResults = checkValue
      ? this.state.filteredData.filter((elm) => elm.stocked)
      : this.state.filteredData;
    this.setState({ filteredData: filteredResults });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <div className="container">
          <SearchBar
            filteredSearch={this.filteredSearch}
            filteredCheck={this.filteredCheck}
          />
          <FilterableProductTable products={this.state.filteredData} />
        </div>
      </div>
    );
  }
}
