import React, { Component } from 'react';
import './App.css';
import data from "./data.json"
import ProductTable from './Components/ProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ProductTable/>
      </div>
    );
  }
}

export default App;
