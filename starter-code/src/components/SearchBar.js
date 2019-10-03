import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input
        className="searchBar"
        placeholder="Search your item"
        onChange={e => this.props.search(e)}
        type="text"
      />
    );
  }
}

export default SearchBar;
