import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <label htmlFor="search">Search</label>
        <br />
        <input
          onChange={(event) => this.props.handleFilter(event)}
          id="search"
          type="text"
        />
      </div>
    );
  }
}

export default SearchBar;
