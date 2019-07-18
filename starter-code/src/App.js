import React, { Component } from 'react';
import './App.css';
import FilterableProduct from './components/FilterableProductTable/filterableProduct';

class App extends Component {
  render() {
    return (
      <div><FilterableProduct></FilterableProduct></div>
      
    );
  }
}

export default App;
