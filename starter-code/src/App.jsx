import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable products={data['data']} />
      </div>
    );
  }
}
