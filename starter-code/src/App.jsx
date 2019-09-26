import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import products from './data.json';
import ProductTable from './components/ProductTable';
// console.log(products);

export default class App extends Component {
  state = {
    query: '',
    products: products
  };

  setQuery = query => {
    this.setState({
      query
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <Search query={this.state.query} handleQuery={this.setQuery} />
        <ProductTable products={products} query={this.state.query} />
      </div>
    );
  }
}
