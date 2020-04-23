import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

  state = {
    search: '',
    checkBox: false,
  }

  filter = (searchQuery) => {
    this.setState({
      search: searchQuery,
    })
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar filter={this.filter} />
        <ProductTable products={ products } searchQuery={this.state.search}/>
      </div>
    );
  }
}
export default FilterableProductTable;