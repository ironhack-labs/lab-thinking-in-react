import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
       <ProductList />
      </div>
    );
  }
}
