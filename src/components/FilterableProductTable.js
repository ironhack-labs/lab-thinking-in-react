import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    productList: this.props.products.data,
    query: '',
    checkbox: false,
  };

  handleQuery = (newValue) => {
    this.setState({
      query: newValue,
    });
  };

  handleCheckbox = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };


  render() {
    console.log(this.state.checkbox);
    return (
      <div>
        <SearchBar
          query={this.state.query}
          handleQuery={this.handleQuery}
          checkbox={this.state.checkbox}
          handleCheckbox={this.handleCheckbox}
        />
        <ProductTable
          query={this.state.query}
          productList={this.state.productList}
          checkbox={this.state.checkbox}
        />
      </div>
    );
  }
}