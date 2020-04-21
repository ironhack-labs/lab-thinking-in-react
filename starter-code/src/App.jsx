import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import data from './data.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
