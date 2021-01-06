import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    filteredProducts: this.props.products,
  };

  handleCheck = (event) => {
    if (event.target.checked === true) {
      this.setState({
        filteredProducts: this.state.products.filter(
          (product) => product.stocked !== false
        ),
      });
    } else {
      this.setState({
        filteredProducts: this.state.products,
      });
    }
  };

  handleSearch = (event) => {
    this.setState({
      filteredProducts: this.state.products.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleSearch={this.handleSearch}
          handleCheck={this.handleCheck}
        />
        <ProductTable allProducts={this.state.filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
