import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import jsondata from './data.json';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={jsondata} />
      </div>
    );
  }
}
