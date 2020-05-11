import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';
class FilterableProductTable extends Component {
  //data is passed down from App to its child FilterableProductTable as a PROP
  state = {
    products: this.props.products.data,
    search: '',
    checkInStock: false,
  };

  handleSearch = (searchFromSearchBar) => {
    console.log('searched:', searchFromSearchBar);

    this.setState({
      search: searchFromSearchBar,
    });
  };

  handleCheckbox = (checkFromCheckbox) => {
    console.log('checked:', checkFromCheckbox);

    this.setState({
      checkInStock: checkFromCheckbox,
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          handleSearch={this.handleSearch}
          checked={this.state.checkInStock}
          handleCheckbox={this.handleCheckbox}
        />
        <ProductTable
          products={this.state.products}
          search={this.state.search}
          inStock={this.state.checkInStock}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
