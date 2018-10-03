import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css";

import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {
  render() {
    return (
      <main className="section">
        <FilterableProductTable></FilterableProductTable>
      </main>
    );
  }
}

export default App;
