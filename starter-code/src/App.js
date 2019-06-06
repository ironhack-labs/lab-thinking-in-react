import React, { Component } from 'react';
import './App.css';
import data from "./data.json"
import ProductTable from "./components/ProductTable" 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Iron Shit Shop</h1>
          <ProductTable products={data} />
        </header>
      </div>
    );
  }
}

export default App;
