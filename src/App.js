import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableTable from './components/filterable-table/FilterableTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableTable products={data} />
      </div>
    );
  }
}

export default App;
