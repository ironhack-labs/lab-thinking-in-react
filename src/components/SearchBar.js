import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input
          onChange={this.props.SearchFromParent}
          placeholder="Search"
          name="search"
          type="search"
        />
      </div>
    );
  }
}

export default SearchBar;
