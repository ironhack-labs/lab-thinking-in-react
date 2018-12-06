import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <input
          onChange={this.props.searchFunc}
          id="searchInput"
          type="text"
          placeholder="Search..."
        />
        <div>
          <input
            onChange={this.props.stockFunc}
            id="stockCheckbox"
            type="checkbox"
          />
          <label>Only show products in stock</label>
        </div>
      </div>
    );
  }
}
