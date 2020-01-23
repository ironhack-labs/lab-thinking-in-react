import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../../src/App.css';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProductList: this.props.products.data,
      showProducts: false,
      search: ''
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  checkboxHandler(event) {
    let { name, value, type, checked } = event.target;
    this.setState({
      showProducts: checked
    });
  }

  searchHandler(event) {
    let { value } = event.target;
    this.setState({
      search: value
    });
  }

  render() {
    return (
      <>
        <h1 className="title is-1">IronStore</h1>
        <SearchBar
          showProducts={this.state.showProducts}
          searchValue={this.state.search}
          handleChange={this.checkboxHandler}
          handleSearch={this.searchHandler}
        />

        <ProductTable
          productList={this.state.ProductList}
          search={this.state.search}
          showProducts={this.state.showProducts}
        />
      </>
    );
  }
}
export default FilterableProductTable;
