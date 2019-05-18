// App.js

import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './FilterableProductTable.js';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Store</h1>
        <FilterableProductTable products={this.state.data} />
      </div>
    );
  }
}

export default App;
