import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchTerm: '',
    inStock: false,
  };

  handleProductSearch = (event) => {
    if (event.target.type === 'text') {
      this.setState({ searchTerm: event.target.value }, () => {
        this.props.filterProducts(this.state.searchTerm, this.state.inStock);
      });
    } else {
      this.setState({ inStock: event.target.checked }, () => {
        this.props.filterProducts(this.state.searchTerm, this.state.inStock);
      });
    }
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          className="search-input"
          type="text"
          name="searchTerm"
          placeholder="Product Search"
          value={this.state.searchTerm}
          onChange={(event) => this.handleProductSearch(event)}
        ></input>
        <br />
        <input
          type="checkbox"
          name="inStock"
          value={this.state.inStock}
          onChange={(event) => this.handleProductSearch(event)}
        ></input>
        <label htmlFor="inStock">Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;
