import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <br />
        <input
          onChange={(event) => this.props.handleFilter(event)}
          id="search"
          type="text"
          value={this.props.input}
        />
      </div>
    );
  }
}

export default SearchBar;
