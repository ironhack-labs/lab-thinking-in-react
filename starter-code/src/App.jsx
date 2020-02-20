import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';
import data from './data.json';

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
        <SearchBar updateSearchText={this.updateSearchText} search={this.state.searchText}/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <FilterableProductTable
              products={this.state.products}
              search={this.state.searchText}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
