import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class Filterable extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default Filterable