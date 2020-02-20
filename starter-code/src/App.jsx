import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronProducts</h1>

        <FilterableProductTable products={data.data} />
      </div>
    );
  }
}

export default App;
