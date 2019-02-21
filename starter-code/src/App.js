import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import data from './data.json'

class App extends Component {
  constructor(){
    super()
    this.state={
      products: data.data
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Iron Store</h1>
        </header>
        <div>
          <FilterableProductTable products={ this.state.products }>

          </FilterableProductTable>
        </div>
      </div>
    );
  }
}

export default App;
