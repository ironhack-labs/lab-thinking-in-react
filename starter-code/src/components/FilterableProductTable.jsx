import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    query : "",
    isStocked : false
  }
  setQuery = query => {
    this.setState({
      query: query
    })
  }
  setStock = isStocked => {
    this.setState({
      isStocked : isStocked
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Iron Store</h1>
       <SearchBar isStocked = {this.state.isStocked} query={this.state.query} triggerSetQuery={this.setQuery} triggerSetState = {this.setStock}/>
       <ProductTable isStocked = {this.state.isStocked} query = {this.state.query} products = {this.props.products}/>
      </div>
    );
  }
}

export default FilterableProductTable;