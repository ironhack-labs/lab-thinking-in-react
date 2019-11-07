import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Table from './Table';

class FilterableProductTable extends Component {
  render() {
    const { products, searchAbility } = this.props;
    return (
      <div className="container">
        <h1 className="App-title">Iron Store</h1>
        <SearchBar searchAbility={searchAbility} />
        <Table products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
