import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable ';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    search: '',
  };

  triggerSearch = (val) => {
    this.setState({
      search: val,
    });
  };

  render() {
    return (
      <>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          triggerSearch={this.triggerSearch}
        />
        <ProductTable products={this.state.products} />
      </>
    );
  }
}

export default FilterableProductTable;
