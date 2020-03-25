import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <label>Search</label>
          <input
            type="text"
            placeholder="Search for a product"
            onChange={this.props.handleSearch}
            value={this.props.search}
          />
        </form>
      </div>
    );
  }
}
