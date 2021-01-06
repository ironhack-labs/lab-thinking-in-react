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

  handleStock = (event) => {
    if (event.target.checked) {
      this.setState({
        filteredProducts: this.state.filteredProducts.filter(
          (product) => product.stocked
        ),
      });
    } else {
      this.setState({ filteredProducts: this.state.products });
    }
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          handleSearchFromParent={this.handleSearch}
          handleStockFromParent={this.handleStock}
        />
        <ProductTable products={this.state.filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
