import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import data from './data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';




class App extends Component {
  // initial state

  state = {
    data: data.data,
    query: '',
    inStock: false,
  };

  setQuery = (queryParam) => {
    this.setState({
      query: queryParam,
    });
  };

  setInStock = (inStockParam) => {
    this.setState({
      inStock: inStockParam,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>

        <SearchBar
          query={this.state.query}
          setQueryProp={this.setQuery}
          setInStockProps={this.setInStock}
        />

        <ProductTable
          data={this.state.data}
          query={this.state.query}
          inStock={this.state.inStock}
        />
      </div>
    );
  }
}

export default App;
