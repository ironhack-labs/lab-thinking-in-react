import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  state = {
    searchValue: '',
    onlyInStock: '',
    products: this.props.products,
  };

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleStock = (event) => {
    this.setState({ onlyInStock: event.target.checked });
  };

  render() {
    const filteredProducts = this.state.products.filter((product) => {
      if (!this.state.searchValue && !this.state.onlyInStock) {
        return product;
      } else if (this.state.searchValue && this.state.onlyInStock) {
        return (
          product.stocked === this.state.onlyInStock &&
          product.name.toLowerCase().includes(this.state.searchValue)
        );
      } else if (!this.state.searchValue && this.state.onlyInStock) {
        return product.stocked === this.state.onlyInStock;
      } else if (this.state.searchValue && !this.state.onlyInStock) {
        return product.name.toLowerCase().includes(this.state.searchValue);
      }
    });

    return (
      <div>
        <SearchBar getSearch={this.handleSearch} getStock={this.handleStock} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
