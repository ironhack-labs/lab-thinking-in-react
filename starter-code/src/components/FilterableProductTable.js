import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter: '',
      filteredProducts: this.props.products.data
    }
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(newFilter) {
    this.setState({
      filter: newFilter,
      filteredProducts: this.props.products.data.filter(product => product.name.startsWith(newFilter))
    })
  }
  
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar filter = {this.state.filter} onFilterChange = { this.onFilterChange }/>
        <ProductTable products = { this.state.filteredProducts }/>
      </div>
    );
  }
}

export default FilterableProductTable;
