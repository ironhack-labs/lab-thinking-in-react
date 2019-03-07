import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
import productData from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 >IronStore</h1>
        </header>
        <FilterableProductTable className="row" products={productData.data}/>
      </div>
    );
  }
}

export default App;
