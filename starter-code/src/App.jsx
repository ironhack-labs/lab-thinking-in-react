import React, { Component } from 'react';

import FilterableProductTable from './Components/FilterableProductTable'


import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable/>
      </div>
    );
  }
}
