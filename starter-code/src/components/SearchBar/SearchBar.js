import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search for a product"
            onChange={this.props.handleSearch}
            value={this.props.search}
          />
          <label>
            <input
              type="checkbox"
              checked={this.props.products.checked}
              onChange={this.props.showProductsInStock}
            />
            Only show products in stock
          </label>
        </form>
      </div>
    );
  }
}
