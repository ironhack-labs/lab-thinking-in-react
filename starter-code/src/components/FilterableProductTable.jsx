import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    articles: this.props.products
  }
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable articles={this.state.articles}/>
      </div>
    );
  }
}
