import React, { Component } from 'react';

import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilteredProductTable extends Component {
  state = {
    searchWord: '',
    stockFilter: false
  }

  updateSearch = (e) => {
    this.setState({
      searchWord: e.target.value,
    })
  }

  updateStockFilter = (e) => {
    this.setState({
      stockFilter: e.target.checked
    })
  }

  render() {
    return (
      <div>
        <h2>IronStore</h2>
        <SearchBar
          // handleChange={(e) => this.updateSearch(e)}
          handleChange={this.updateSearch}
          // handleChangeStock={(e) => this.updateStockFilter(e)}
          handleChangeStock={this.updateStockFilter}
        />
        <ProductTable
          products={this.props.products}
          searchWord={this.state.searchWord}
          stockFilter={this.state.stockFilter}
        />
      </div>
    );
  }
}

export default FilteredProductTable;