import React, { Component } from 'react';

// IMPORT COMPONENTS
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
//

export class FilterableProductTable extends Component {
  state = {
    searchValue: null,
    onlyInStock: null,
    products: [...this.props.products],
  };

  handleSearch = (event) => {
    console.log('you are typing in search');
    console.log(`Search keyword is  ${event.target.value}`);
    this.setState({ searchValue: event.target.value });
  };

  handleStock = (event) => {
    console.log('you are clicking the stock checkbox');
    console.log(`Value is  ${event.target.checked}`);
    this.setState({ onlyInStock: event.target.checked });
    console.log(`State is  ${this.state.onlyInStock}`);
  };

  render() {
      //FILTER
    const filteredProducts = this.state.products.filter((product) => {
      // EMPTY SEARCH BAR + UNCHECKED BOX
      if (!this.state.searchValue && !this.state.onlyInStock) {
        return product;
      }
      // WORDS IN SEARCH BAR + CHECKED BOX
      else if (this.state.searchValue && this.state.onlyInStock) {
        return (
          (product.stocked === this.state.onlyInStock &&
            product.name.includes(this.state.searchValue))
        );
      }
      // EMPTY SEARCH BAR + CHECKED BOX
      else if (!this.state.searchValue && this.state.onlyInStock) {
        return product.stocked === this.state.onlyInStock;
      }

      // WORDS IN SEARCH BAR + UNCHECKED BOX
      else if (this.state.searchValue && !this.state.onlyInStock) {
        return product.name.includes(this.state.searchValue);
      }
    });

    //DISPLAY
    return (
      <div>
        <SearchBar getKeyword={this.handleSearch} getStock={this.handleStock} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
