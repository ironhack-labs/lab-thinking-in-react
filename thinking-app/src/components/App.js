import React, { Component } from 'react';

import data from '../data.json'

import FilterableProductTable from './FilterableProductTable'

import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: data
    }
  }

  render() {

    return (
      <div className="app" >
        <FilterableProductTable {...this.state.data} />
      </div>
    );
  }
}

export default App;
