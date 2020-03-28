import React, { Component } from 'react';
import './App.css';
import products from './data.json';
import SearchBar from './components/SearchBar/SearchBar';

export default class App extends Component {
  state = {
    products: [...products.data]
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar products={this.state.products} />
      </div>
    );
  }
}
