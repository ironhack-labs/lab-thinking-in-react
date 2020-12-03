import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          name="search"
          onChange={this.props.handleChange}
          placeholder="Write the name of the product here"
        ></input>
      </div>
    );
  }
}

export default SearchBar;
