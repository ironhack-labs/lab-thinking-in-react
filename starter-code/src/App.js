import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
import data from './data.json'


class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <h1 className="main-title">IronStore</h1>
        <FilterableProductTable products={data.data} />
      </div>
    );
  }
}

export default App;
