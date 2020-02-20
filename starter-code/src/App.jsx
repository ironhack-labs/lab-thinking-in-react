import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from '../src/components/data.json';
import SearchBar from '../src/components/SearchBar';
import ProductTable from '../src/components/ProductTable';

export default class App extends Component {
  state = {
    items: [...data.data],
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
        <div>IronStore</div>
        <SearchBar
          updateSearchText={this.updateSearchText}
          search={this.state.searchText}
        />

        <ProductTable items={this.state.items} search={this.state.searchText}  />
      </div>
    );
  }
}
