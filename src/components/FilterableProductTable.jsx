//contains the entirety of the example (read between the lines, this is going to be our App.js)
import SearchBar from './SearchBar';
import React, { Component } from 'react';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    searchBox: '',
  };
  handleFilter = (searchValue) => {
    const filteredProducts = this.state.products.filter((product) => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    this.setState({
      products: filteredProducts,
    });
  };
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar handleFilter={this.handleFilter} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}
