import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      query: '',
      checkBoxState: true
    };
    this.performSearch = this.performSearch.bind(this);
    this.checkBoxState = this.checkBoxState.bind(this);
  }
  performSearch(value) {
    this.setState({
      query: value
    });
  }
  checkBoxState() {
    this.setState({
      checkBoxState: !this.state.checkBoxState
    });
  }
  get filteredProductsList() {
    const query = this.state.query;
    const products = this.state.products;
    if (this.state.checkBoxState) {
      return products.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return products
        .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .filter(checkItems => checkItems.stocked);
    }
  }
  render() {
    return (
      <div>
        <SearchBar
          query={this.state.query}
          performSearch={this.performSearch}
        />
        <input type="checkbox" onChange={this.checkBoxState} />
        <ProductTable products={this.filteredProductsList} />
      </div>
    );
  }
}
