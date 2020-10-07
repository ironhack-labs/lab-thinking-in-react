import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <h2>Search</h2>
        <input
          onChange={}
          value={}
          id="search"
          autoComplete="off"
          className="search"
          type="text"
          name="search"
        />
      </div>
    );
  }
}
