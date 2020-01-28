import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  state = {
    products: data.data.map((oneProduct, index) => { return {...oneProduct, id: index} }),
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <FilterableProductTable products={this.state.products} />
        </div>
      </div>
    );
  }
}
