import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

  state = {
    search: '',
    checkBox: false,
  }

  filterProducts = (searchQuery) => {
    this.setState({
      search: searchQuery,
    })
  }

  checkedOrNot = () => {
    this.setState({
      checkBox: !this.state.checkBox,
    })
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar filter={this.filterProducts} check={this.checkedOrNot}/>
        <ProductTable products={ products } searchQuery={this.state.search} checkBox={this.state.checkBox}/>
      </div>
    );
  }
}

export default FilterableProductTable;