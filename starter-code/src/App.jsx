import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import products from './data.json';

export default class App extends Component {
  state = {
    unmutableProd: products.data,
    filteredProd: products.data
  };

  handleSearchChange = e => {
    let unmutableProdCopy = [...this.state.unmutableProd];
    let search = e.target.value;
    const filteredProd = unmutableProdCopy.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ filteredProd: filteredProd });
  };
  render() {
    return (
      <div className="App">
        <FilterableProductTable
          searchAbility={this.handleSearchChange}
          products={this.state.filteredProd}
        />
      </div>
    );
  }
}
