import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleInStockFilterChange = this.handleInStockFilterChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }
  
  handleInStockFilterChange(e) {
    this.props.onInStockFilterChange(e.target.checked);
  }

  render() {
    // const searchInput = this.props.searchInput;
    // const inStockFilter = this.props.inStockFilter;
    return (
      <form className="search-form">
        <input className="search-input" type="text" placeholder="Search..." value={this.props.searchInput} onChange={this.handleSearchTextChange} />
        <p className="checkbox-container">
          <input type="checkbox" id="checkbox1" checked={this.props.inStockFilter} onChange={this.handleInStockFilterChange}/>
          <label for="checkbox1">Only show products in stock</label>
        </p>
      </form>
    )
  }
}

export default SearchBar
