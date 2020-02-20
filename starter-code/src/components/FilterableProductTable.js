import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    searchText: ''
  };
  updateSearchText = text => {
    this.setState({
      searchText: text
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          updateSearchText={this.updateSearchText}
          search={this.state.searchText}
        />
        <ProductTable
          products={this.state.products}
          search={this.state.searchText}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
