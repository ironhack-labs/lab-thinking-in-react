import React, { Component } from 'react';
import './App.css';
import SearchBar from './/components/SearchBar';
import ProductTable from './components/ProductTable';
import data from '../src/data.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.data,
      filterProducts: data.data
    };
  }

  search = e => {
    const copyProduct = [...this.state.products];
    let newSearch = copyProduct.filter(elm => {
      return elm.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      ...this.state,
      filterProducts: newSearch
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar search={this.search} />
        <ProductTable  filterProducts={this.state.filterProducts} />
      </div>
    );
  }
}
