import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <h1 className="mt-4">IronStore</h1>
        <ProductList/>
      </div>
    );
  }
}

export default App;
