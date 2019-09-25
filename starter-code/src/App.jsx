import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductRow from './components/ProductRow';
import ProductTable from './components/ProductTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable data={data.data} />
        <SearchBar data={data.data} />
        <ProductTable data={data.data} />
      </div>
    );
  }
}

export default App;
