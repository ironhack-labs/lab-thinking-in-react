import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    articles: this.props.products,
    displayAll: true
  };

  filterHandler = input => {
    let filteredArticles = [...this.props.products];
    if (input.type === 'checkbox' && input.checked) {
      this.setState({ displayAll: false });
      filteredArticles = [...filteredArticles.filter(a => a.stocked)];
    }
    console.log(filteredArticles);
    this.setState({
      articles: filteredArticles
    });

    if (input.type === 'text') {
      console.log(input.value);
      filteredArticles.filter(a => {
        a.name.toLowerCase().includes(input.value.toLowerCase() || input.value);
      });
    }
    this.setState({
      articles: filteredArticles
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          // stockFilter={() => this.checkHandler()}
          // searchFilter={e => this.searchHandler(e.target.value)}
          clbk={this.filterHandler}
        />
        <ProductTable articles={this.state.articles} />
      </div>
    );
  }
}
