import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="SearchBar">
        <p>Search:</p>
        <div>
          <input
            type="text"
            className="input"
            placeholder="Search..."
            onChange={event => this.props.searchChange(event)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
