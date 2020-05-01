import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data,
      search: '',
      checkStock: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleSearch(e) {
    console.log(e.target.value);
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  }

  handleCheckbox(e) {
    console.log(e.target.checked);
    this.setState({
      checkStock: e.target.checked,
    });
  }

  render() {
    const { data, search, checkStock } = this.state;
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          handleSearch={this.handleSearch}
          handleCheckbox={this.handleCheckbox}
        />
        <ProductTable data={data} search={search} checkStock={checkStock} />
      </div>
    );
  }
}

export default FilterableProductTable;
