import React, { Component } from 'react';
import './App.css';
import data from './data.json'

import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data.data
    }

  }
  render() {

    return (
      <div className="App">
        <FilterableProductTable products={this.state.data} />
      </div>
    );
  }
}
