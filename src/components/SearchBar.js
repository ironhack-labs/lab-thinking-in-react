import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input id="search" name="search" type="text" />
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
