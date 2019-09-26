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
    products: products,
    checked: false
  };

  setQuery = query => {
    this.setState({
      query
    });
  };

  checkHandle = event => {
    const { checked } = event.target;
    console.log(checked);
    this.setState({
      checked
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <Search
          checked={this.state.checked}
          query={this.state.query}
          handleQuery={this.setQuery}
          checkHandle={this.checkHandle}
        />
        <ProductTable
          products={products}
          query={this.state.query}
          checked={this.state.checked}
        />
      </div>
    );
  }
}
