import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable '
import data from './data.json'


class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable allProducts={data} />
      </div>
    );
  }
}

export default App;