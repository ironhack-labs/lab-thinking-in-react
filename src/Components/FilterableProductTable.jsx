import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  state = {
    searchValue: '',
    inStock: false,
  };

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  };

  handleStock = (event) => {
    this.setState({ inStock: event.target.checked ? true : false });
  };

  render() {
    const copy = [...this.props.products];
    const filteredProducts = copy
      .filter((product) => {
        return product.name.toLowerCase().includes(this.state.searchValue);
      })
      .filter((product) => {
        if (this.state.inStock) {
          return product.stocked === true;
        } else {
          return true;
        }
      });

    return (
      <div className="filterableProductTable">
        <h1>IronStore</h1>
        <SearchBar callback1={this.handleSearch} callback2={this.handleStock} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
