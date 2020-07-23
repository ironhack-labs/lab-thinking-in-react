import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import FilterButton from './FilterButton';

export class FilterableProductTable extends Component {
  state = {
    searchValue: null,
    filterValue: false,
  };

  handleSearch = (event) => {
    console.log('the search was used with the event', event.target.value);
    this.setState({ searchValue: event.target.value });
    console.log('the new state is', this.state);
    console.log(
      'here is the corresponding list of producs',
      this.props.products.filter((product) => {
        return product.name.includes(this.state.searchValue);
      })
    );
  };

  handleFilter = (event) => {
    console.log(
      'the filter btn was clicked with the event',
      event.target.checked
    );
    this.setState({ filterValue: event.target.checked });
    console.log('the new state is', this.state);
    console.log(
      'here is the list of products in stock',
      this.props.products.filter((product) => {
        return product.stocked === this.state.filterValue;
      })
    );
  };

  render() {
    const filteredProducts = this.props.products.filter((product) => {
      if (!this.state.searchValue && !this.state.filterValue) {
        return product;
      } else if (this.state.searchValue) {
        if (this.state.filterValue) {
          return (
            product.stocked === this.state.filterValue &&
            product.name.includes(this.state.searchValue)
          );
        } else return product.name.includes(this.state.searchValue);
      } else if (this.state.filterValue) {
        if (this.state.searchValue) {
          return (
            product.stocked === this.state.filterValue &&
            product.name.includes(this.state.searchValue)
          );
        } else return product.stocked === this.state.filterValue;
      }
    });

    return (
      <React.Fragment>
        <SearchBar callback={this.handleSearch} />
        <FilterButton callback={this.handleFilter} />
        <ProductTable
          products={this.props.products}
          filteredProducts={filteredProducts}
        />
      </React.Fragment>
    );
  }
}

export default FilterableProductTable;
