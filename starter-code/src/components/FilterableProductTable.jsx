import React, { Component } from 'react';
import data from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    searchElement: '',
    availability: false
  };

  searchHandler = e => {
    e.target.type === 'checkbox'
      ? this.setState({ availability: e.target.checked })
      : this.setState({ searchElement: e.target.value });
  };

  render() {
    return (
      <div className="flex center column">
        <h1>IronStore</h1>
        <SearchBar clbk={this.searchHandler} />
        <ProductTable
          products={data.data
            .filter(a =>
              this.state.searchElement
                ? a.name
                    .toLowerCase()
                    .includes(this.state.searchElement.toLowerCase())
                : true
            )
            .filter(a=> this.state.availability? a.stocked : true)}
        />
      </div>
    );
  }
}
