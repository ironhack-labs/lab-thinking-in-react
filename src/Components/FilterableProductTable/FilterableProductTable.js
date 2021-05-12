import React from 'react';
import './FilterableProductTable.css';

import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProductTable extends React.Component {
  state = {
    searchKey: '',
  };

  handleSearchUpdate = (searchKey) => {
    this.setState({ searchKey: searchKey });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <SearchBar listener={this.handleSearchUpdate} />
        <ProductTable filter={this.state.searchKey} />
      </div>
    );
  }
}
