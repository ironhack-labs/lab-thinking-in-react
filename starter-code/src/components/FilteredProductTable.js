import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import {data} from '../data.json';

class FilterableProductTable extends Component {
  state = {
    data: data,
  }

  searchData(query) {
    let newData = data.filter(value => {
      return value.name.includes(query)
    });
    this.setState({data: newData})
    
    console.log("on query", newData, this.state.data)
  }
  render() {
    return (
      <div>
        <SearchBar onQueryChange={e => this.searchData(e)} inStockOnly={this.state.inStockOnly} />
        <ProductTable products={this.state.data} inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

export default FilterableProductTable;