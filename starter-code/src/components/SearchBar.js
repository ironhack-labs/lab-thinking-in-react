import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
    console.log(this.state.searchTerm);
  };

  render() {
    return (
      <form>
        <label>Search</label>
        <input
          type="search"
          placeholder="Type a product…"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
