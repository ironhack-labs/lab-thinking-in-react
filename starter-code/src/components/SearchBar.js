import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    search: ''
  };
  
  handleSearch = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.filterArray(this.state.search);
      }
    );
  };

  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={this.props.query}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default SearchBar;
