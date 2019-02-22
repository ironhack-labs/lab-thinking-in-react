import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={event => this.props.searchChange(event)}
          name="search"
          value={this.props.search}
          type="text"
          placeholder="Search"
        />
        <label>Only show products in stock </label>
        <input
          onChange={event => this.props.checkChange(event)}
          type="checkbox"
          name="checkBox"
          value="Only show products in stock"
          // checked={this.props.checkBox}
        />
      </div>
    );
  }
}

export default SearchBar;
