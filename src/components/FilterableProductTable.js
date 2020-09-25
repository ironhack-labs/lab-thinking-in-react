import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    productList: this.props.products.data,
    query: '',
    // create a new propriety for the checkbox value
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

  // create a new function to update the value of the checkbox propriety

  render() {
    // console.log(this.props.products.data);
    console.log(this.state.checkbox);
    return (
      <div>
        <SearchBar
          query={this.state.query}
          handleQuery={this.handleQuery}
          // send checkbox valeu and function as a props
          checkbox={this.state.checkbox}
          handleCheckbox={this.handleCheckbox}
        />
        <ProductTable
          query={this.state.query}
          productList={this.state.productList}
          // send checkbox valeu as a props
          checkbox={this.state.checkbox}
        />
      </div>
    );
  }
}
