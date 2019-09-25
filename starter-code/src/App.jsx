import React, { Component } from 'react';
import './App.css';

import data from './data.json';

import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: data
    };
  }
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}
