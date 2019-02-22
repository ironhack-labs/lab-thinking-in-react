import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        SEARCH SearchBar
        <input
          onChange={event => this.props.searchChange(event)}
          name="search"
          value={this.props.search}
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchBar;
