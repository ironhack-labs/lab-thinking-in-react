import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import './FilterableProductTable.css';
import json from '../../data.json';

export default class FilterableProductTable extends Component {
  constructor(props){
      super(props)     
      this.state = {
          search: ""
      }
  }
  
  handleSearch(e){
      this.setState({search: e.target.value});
  }

  render() {
    return (
      <section id="filterable-product-table">
        <h1>IronStore</h1>
        <SearchBar handleSearch={(e) => this.handleSearch(e)} />
        <ProductTable data={json.data} search={this.state.search}/>
      </section>
    );
  }
}
