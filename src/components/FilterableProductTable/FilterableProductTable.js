import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import './FilterableProductTable.css';
import json from '../../data.json';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      inStock: false,
    };
  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }
  handleInStock(e) {
    this.setState({ inStock: e.target.checked });
  }

  render() {
    const { search, inStock } = this.state;
    return (
      <section id="filterable-product-table">
        <h1>IronStore</h1>
        <SearchBar
          handleSearch={(e) => this.handleSearch(e)}
          handleInStock={(e) => this.handleInStock(e)}
        />
        <ProductTable data={json.data} search={search} inStock={inStock}/>
      </section>
    );
  }
}
