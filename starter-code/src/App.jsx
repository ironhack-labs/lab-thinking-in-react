import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App mt-3">
        <h1>IronStore</h1>
        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
