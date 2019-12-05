import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import json from './data.json';
import SearchBar from './searchBar/searchBar';
import ProductTable from './productTable/productTable';

export default class App extends Component {
  constructor() {
    super();
    this.state = { products: json.data, searchString: '', flag: false };
  }

  updateSearchBox(e) {
    let productArr = [...this.state.products];

    productArr = productArr.filter(product => {
      return product.name.includes(e.target.value);
    });

    this.setState({
      ...this.state,
      products: productArr,
      searchString: e.target.value
    });
  }

  hideStock() {
    let productArr = [...this.state.products];

    if (this.state.flag) {
      productArr = json.data;
    } else {
      productArr = productArr.filter(product => {
        return product.stocked;
      });
    }

    this.setState({
      ...this.state,
      products: productArr,
      flag: !this.state.flag
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar
          myValue={this.state.searchString}
          updateValue={val => this.updateSearchBox(val)}
          showStock={() => this.hideStock()}
        ></SearchBar>
        <ProductTable products={this.state.products}></ProductTable>
      </div>
    );
  }
}
