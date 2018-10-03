import React, { Component } from "react";
import data from "../data.json";

class SearchBar extends Component {
  constructor() {
    super();
  }

  sendSearch = e => {
    this.props.newSearch(e.target.value);
  };

  render() {
    return (
      <div style={{ border: "green" }}>
        <input
          onChange={e => this.sendSearch(e)}
          type="text"
          placeholder="Search.."
        />
        <input type="checkbox" name="stock" />
        <p>Hola marte</p>
      </div>
    );
  }
}

export default SearchBar;
