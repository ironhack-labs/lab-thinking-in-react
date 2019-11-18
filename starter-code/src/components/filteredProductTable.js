import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList : this.props.products,
      searchInput : "",
      inStockFilter: false
    } 
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleInStockFilterChange = this.handleInStockFilterChange.bind(this);
  }

  handleSearchTextChange(filterText) {
    this.setState({
      searchInput: filterText
    });
  }
  
  handleInStockFilterChange(inStockOnly) {
    this.setState({
      inStockFilter: inStockOnly
    })
  }
  
  render() {
    // console.log("This is in Filtered Product Table" + this.props.products)
    return (
      <div className="producttable">
      <SearchBar searchInput={this.state.searchInput} inStockFilter={this.state.inStockFilter} onSearchTextChange={this.handleSearchTextChange} onInStockFilterChange={this.handleInStockFilterChange} />
      <ProductTable products={this.props.products} searchInput={this.state.searchInput} inStockFilter={this.state.inStockFilter} />
      </div>
    )
  }
}

export default FilterableProductTable
