
import React, { Component } from 'react';
import productList from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  // Initial state
  state = {
    query: '',
    checked: false,
    products: productList
  }

  setUserQuery = query => {
    this.setState({
      query
    })
  }

  setStockState = query => {
    this.setState({
      checked: true
    })
  }

  render () {
    return (
      <div className="filterable-product-table">
          <SearchBar
            query={this.state.query}
            handleQuery={this.setUserQuery}
            handleCheckbox={this.setStockState}
            checked={this.state.checked}
            />
          <ProductTable
            products={this.state.products}
            query={this.state.query}
            checked={this.state.checked}
          />
      </div>
    )
  }
}

export default FilterableProductTable;
