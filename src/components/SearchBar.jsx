import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          className="SearchBar__input"
          type="search"
          onChange={(event) => this.props.filterByName(event.target.value)}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchBar;
