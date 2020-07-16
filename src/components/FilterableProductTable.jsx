import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    search: '',
    inStock: false,
  };

  handleSearch = (search) => {
    let newProducts = this.props.products.data.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
    this.setState({
      products: newProducts,
      search: search,
    });
  };

  handleCheckbox = () => {
    let newProducts = this.props.products.data.filter(
      (product) => product.stocked === this.state.inStock
    );
    this.setState({
      products: newProducts,
      inStock: !this.state.inStock,
    });
  };

  render() {
    return (
      <>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          handleSearch={this.handleSearch}
          checkboxState={this.state.inStock}
          handleCheckbox={this.handleCheckbox}
        />
        <ProductTable products={this.state.products} />
      </>
    );
  }
}
