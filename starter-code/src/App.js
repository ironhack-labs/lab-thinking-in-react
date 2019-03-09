import React, { Component } from 'react';

import FilterableProductTable from './components/FilterableProductTable.js';
// import SearchBar from './components/SearchBar.js';
// import ProductTable from '../components/ProductTable.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <FilterableProductTable/>
      
      </div>
    );
  }
}

export default App
