import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilterableProduct from './components/FilterableProductTable/filterableProduct';

class App extends Component {
  render() {
    return (
      <div><FilterableProduct products={ data }></FilterableProduct></div>
      
    );
  }
}

export default App;
