import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = (e) => {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <form>
        <label>Search</label>
        <input
          type="search"
          placeholder="Type a product…"
          value={this.props.searchTerm}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
