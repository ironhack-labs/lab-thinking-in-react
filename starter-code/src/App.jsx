import React, { Component } from 'react';
import FilterableProductTable from './components/filterableProductTable/FilterableProductTable.js';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronStore</h1>
        </header>
        <div>
          <FilterableProductTable />
        </div>
      </div>
    );
  }
}
