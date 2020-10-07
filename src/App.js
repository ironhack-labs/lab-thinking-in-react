import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  state = {
    products: data,
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable products={this.state.products} />
      </div>
    );
  }
}

export default App;
