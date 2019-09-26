import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(value) {
    this.setState({
      query: value
    });
  }

  render() {
    //const data=this.props.products.data;
    return (
      <div>
        <SearchBar
          query={this.state.query}
          performSearch={this.performSearch}
        />
        <ProductTable productList={this.props.products} />
      </div>
    );
  }
}
