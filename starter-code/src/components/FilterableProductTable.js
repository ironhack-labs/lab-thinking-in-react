import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    search: '',
    checked: false
  };

  setQuery = value => {
    this.setState({
      search: value
    });
  };

  setCheck = value => {
    this.setState({
      checked: value
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          handleQuerySearch={this.setQuery}
          checkedState={this.state.checked}
          handleQueryCheck={this.setCheck}
        />
        <ProductTable
          products={this.props.products}
          search={this.state.search}
          checkedState={this.state.checked}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
