import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';
import './App.css';

import React, { Component } from 'react';

const products = data.data.map((product) => product);

class App extends Component {
  state = {
    products: products,
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
