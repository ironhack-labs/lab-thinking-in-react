import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      filter: { searchText: '', onlyStock: false }
    };
    this.filterChange = this.filterChange.bind(this);
  }
  filterChange(filter) {
    this.setState({ filter });
  }
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar filterValues={this.filterChange} />
        <ProductTable
          products={this.state.products}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
