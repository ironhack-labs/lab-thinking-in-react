import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data.json'

import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">
          Iron Store
        </h1>
        <FilterableProductTable products={data.data}/>
      </div>
    );
  }
}

export default App;
