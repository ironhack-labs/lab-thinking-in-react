import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable/ProductTable'
import Products from './data.json'


class App extends Component {
  constructor(){
    super()
    this.state = {
      AllProducts: Object.values(Products)[0]
    }
  }

  render() {
    return (
      <div className="App">
      <ProductTable/>
     
      </div>
    );
  }
}

export default App;
