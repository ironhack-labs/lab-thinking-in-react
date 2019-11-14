import React, { Component } from 'react';

import './Search.css';
export default class Search extends Component {
  render() {
    return (
      <div className="search-bar">
        <h2>Search</h2>
        <input name="search" onChange={this.props.handleSearch} />
        <p>
          <input
            name="checkbox"
            onChange={this.props.filterProducts}
            type="checkbox"
          />
          Only show products in stock
        </p>
      </div>
    );
  }
}
