import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  state = {
    searchValue: '',
    inStock: null,
  };

  inStock = (e) => {
    this.setState({ inStock: e.target.checked });
  };

  handleSearch = (event) => {
    console.log('I am being triggered');

    this.setState({ searchValue: event.target.value });
  };

  render() {
    const filteredProducts = this.props.products.filter((product) => {
      if (!this.state.searchValue && !this.state.inStock) {
        return product;
      } else if (!this.state.searchValue && this.state.inStock) {
        return product.stocked === true;
      } else {
        return product.name.includes(this.state.searchValue);
      }
    });
    console.log(filteredProducts);

    return (
      <div>
        <h2>IronStore</h2>
        <SearchBar callback={this.handleSearch} inStock={this.inStock} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
