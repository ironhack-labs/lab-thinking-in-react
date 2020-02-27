import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data.json'

import FilterableProductTable from './components/filterableProductTable'

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <FilterableProductTable products={data} />

      </div>
    );
  }
}

