import React, { Component } from 'react';
import ProductTable from './ProductTable.js';
import SearchBar from './SearchBar.js';

export default class FilterableProductTable extends Component {
    state = {
        products: this.props.products,
        query: ''
    }

    setQuery = query => {
        this.setState({
            query:query
        });
    };
    
    // Not sure whether I'll need this one
    handleSubmit = event => {
        event.preventDefault();
    }


  render() {
    return (
      <div>
      <SearchBar products={this.props.products} setQuery={this.setQuery} query={this.state.query} handleSearch={this.handleSearchChange}  handleSubmit={this.handleSubmit}/>
        <ProductTable products={this.state.products} query={this.state.query} /> 
      </div>
    );
  }
}
