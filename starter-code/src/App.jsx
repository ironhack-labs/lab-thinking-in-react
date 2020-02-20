import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable />
      </div>
    );
  }
}
