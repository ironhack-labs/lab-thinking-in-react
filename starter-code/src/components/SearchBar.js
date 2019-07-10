import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <input
        className="searchBarItem"
        onChange={this.props.handleChange}
        value={this.props.text}
        placeholder="Search..."
      />
    );
  }
}
