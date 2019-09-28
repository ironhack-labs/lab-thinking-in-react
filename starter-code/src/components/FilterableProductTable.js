
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  // Initial state
  state = {
    query: '',
    stocked: false
  }

  setUserQuery = query => {
    // Shorthand property assignment
    this.setState({
      query
    })
  }

  setStockState = query => {
    this.setState({
      stocked: true
    })
  }

  render () {
    // console.log(`Props on Filterable Product Table (FPT)`, this.props)

    return (
      <div className="filterable-product-table">
          <h2>Filterable Product Table</h2>
          {/* handleQuery has to map with child (SearchBar)*/}
          <SearchBar
            userQuery={this.state.query}
            handleQuery={this.setUserQuery} handleCheckbox={this.setStockState}/>
          <ProductTable productsOnFPT={ this.props }/>
      </div>
    )
  }
}

export default FilterableProductTable;