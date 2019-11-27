import React, { Component } from 'react';
import FilterableProductTable from './FilterableProductTable';
import products from './data.json';

export default class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <header className="header">
          <h1>IronStore</h1>
        </header>
        <FilterableProductTable products={products.data} />
      </div>
    );
  }
}
