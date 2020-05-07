import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

class App extends Component {
  state = {
    query: '',
    filterStock: false,
  };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };
  setFilterStock = (filterStock) => {
    this.setState({
      filterStock: filterStock,
    });
  };
  render() {
    return (
      <div className="App">
        <FilterableProductTable
          products={data.data}
          query={this.state.query}
          triggerSetQuery={this.setQuery}
          filterStock={this.state.filterStock}
          setFilterStock={this.setFilterStock}
        />
      </div>
    );
  }
}

export default App;
