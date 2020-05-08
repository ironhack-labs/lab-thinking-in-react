import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Iron Reastore</h1>
        </header>

        <FilterableProductTable />
       
      </div>
    );
  }
}
