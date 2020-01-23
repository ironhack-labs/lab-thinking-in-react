import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';
import { data } from './data.json'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      products: data,
      searchInput: '',
    }

    this.searchProduct = this.searchProduct.bind(this);

  }

  searchProduct(input) {
    this.setState({
      searchInput: input,
    })
  }

  render() {
    return (
      <div className="App">
      <FilterableProductTable products={this.state.products} search={this.searchProduct} searchInput={this.state.searchInput} />
      </div>
    );
  }
}
