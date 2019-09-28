
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  // Initial state
  state = {
    query: ''
  }

  setUserQuery = userQuery => {
    this.setState({
      userQuery
    })
  }

  render () {
    // console.log(`Props from Filterable Product Table (FPT)`, this.props)

    return (
      <div className="filterable-product-table">
          <h2>Filterable Product Table</h2>
          {/* handleQuery has to map with child (SearchBar)*/}
          <SearchBar userQuery={this.state.query} handleQuery={this.setUserQuery} />
          <ProductTable productsOnFPT={ this.props }/>
      </div>
    )
  }
}

export default FilterableProductTable;