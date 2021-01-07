import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    filteredProducts: this.props.products.data,
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
        <h1>IronStore</h1>
        <SearchBar SearchFromParent={this.handleSearch} />
        <ProductTable products={this.state.filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
