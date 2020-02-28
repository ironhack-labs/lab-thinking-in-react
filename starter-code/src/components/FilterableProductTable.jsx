import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    articles: this.props.products,
    searchQuery: '',
    displayInStock: false
  };

  updateSearchQuery = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  filterStock = articles => {
    return articles.filter(a => a.stocked);
  };

  filterSearch = articles => {
    return articles.filter(a => {
      return a.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase());
    });
  };
  filterHandler = () => {
    if (!this.state.displayInStock) {
      return this.filterSearch(this.state.articles);
    }
    return this.filterSearch(this.filterStock(this.state.articles));
  };
  render() {
    return (
      <div>
        <SearchBar clbk={this.updateSearchQuery} />
        <ProductTable articles={this.filterHandler()} />
      </div>
    );
  }
}