import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    query: '',
    checkbox: false,
  };

  // handleQuery = (newValue) => {
  //   this.setState({
  //     query: newValue,
  //   });
  // };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  handleCheckbox = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore 🛒</h1>
        <SearchBar
          query={this.state.query}
          setQuery={this.setQuery}
          checkbox={this.state.checkbox}
          handleCheckbox={this.handleCheckbox}
        />
        <br></br>
        <ProductTable query={this.state.query} products={this.props.products} />
      </div>
    );
  }
}
