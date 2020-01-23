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
      showStock: false,
    }

    this.searchProduct = this.searchProduct.bind(this);
    this.checkStock = this.checkStock.bind(this);

  }

  searchProduct(input) {
    this.setState({
      searchInput: input,
    })
  }

    checkStock(input) {
      this.setState({
        showStock: input,
      })
    }

  render() {
    return (
      <div className="App">
      <FilterableProductTable checkStock={this.checkStock} products={this.state.products} search={this.searchProduct} searchInput={this.state.searchInput} showStock={this.state.showStock} />
      </div>
    );
  }
}
