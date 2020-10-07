import React, { Component } from 'react';

export default class SearchBar extends Component {

  handleSearch = (e) => {
    const val = e.target.value
  }

  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input onChange={this.handleSearch} id="search" name="search" type="text" />
        <div className="checkbox-product">
          <input type="checkbox" />
          <label name="stock" htmlFor="productsStock">
            Only show products on stock
          </label>
        </div>
      </div>
    );
  }
}
