import React, { Component } from 'react';
import logo from './logo.svg';
import FilterableProductTable from "./FilterableProductTable"
import data from './data.json'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronStore</h1>
        </header>
        <FilterableProductTable products={data}/>
      </div>
    );
  }
}
