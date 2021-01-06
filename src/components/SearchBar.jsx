import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input
          onChange={this.props.handleSearchFromParent}
          placeholder="Search"
          name="search"
          type="search"
        />
        <div>
          <input
            onChange={this.props.handleStockFromParent}
            name="checkbox"
            type="checkbox"
          />
          <label htmlFor="checkbox">Only show products on stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
