import React from 'react';
import './FilterableProductTable.css';

import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProductTable extends React.Component {
  state = {
    searchKey: '',
    toggle: false,
  };

  handleTextUpdate = (searchKey) => {
    this.setState({ searchKey: searchKey });
  };

  handleToggleUpdate = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="filterable-product-table">
        <h1>{this.props.title}</h1>
        <SearchBar
          textChangeListener={this.handleTextUpdate}
          toggleChangeListener={this.handleToggleUpdate}
        />
        <ProductTable
          filter={this.state.searchKey}
          showOutOfStock={!this.state.toggle}
        />
      </div>
    );
  }
}
